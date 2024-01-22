<div align="center">
  
  ![banner](docs/ts-js-k6.png)

# Template to use TypeScript with k6

![.github/workflows/push.yml](https://github.com/grafana/k6-template-typescript/workflows/.github/workflows/push.yml/badge.svg?branch=main)

</div>

This repository provides a scaffolding project to start using TypeScript in your k6 scripts.

## Rationale

While JavaScript is great for a myriad of reasons, one area where it fall short is type safety and developer ergonomics. It's perfectly possible to write JavaScript code that will look OK and behave OK until a certain condition forces the executor into a faulty branch.

While it, of course, still is possible to shoot yourself in the foot with TypeScript as well, it's significantly harder. Without adding much overhead, TypeScript will:

- Improve the ability to safely refactor your code.
- Improve readability and maintainability.
- Allow you to drop a lot of the defensive code previously needed to make sure consumers are calling functions properly.


## Installation

**Creating a project from the `template-typescript` template**

To generate a TypeScript project that includes the dependencies and initial configuration, navigate to the [template-typescript](https://github.com/grafana/k6-template-typescript) page and click **Use this template**.

  ![](docs/use-this-template-button.png)


**Install dependencies**

Clone the generated repository on your local machine, move to the project root folder and install the dependencies defined in [`package.json`](./package.json)

```bash
npm install
```

## Running the test

To run a test written in TypeScript, we first have to transpile the TypeScript code into JavaScript running the bundler:

```bash
npm run bundle
```

This command creates the final test files to the `./dist` folder.

Once that is done, we can run our script the same way we usually do, for instance:

```bash
k6 run dist/get-200-status-test.js
```

## Transpiling and Bundling

By default, k6 does not support TypeScript, but it supports ES modules and ES5.1 code with CommonJS modules. To use TypeScript, we have to set up a bundler that converts TypeScript to any of these formats. 

This project uses `Babel` and `Webpack` to bundle the different files into CommonJS modules, using its [`webpack.config.js`](./webpack.config.js) configuration.

The bundled tests will be transpiled to ES5.1 code with CommonJS modules, this allows running the tests with [`--compatibility-mode=base`](https://grafana.com/docs/k6/latest/using-k6/javascript-compatibility-mode/) for better performance:

```bash
k6 run --compatibility-mode=base dist/get-200-status-test.js
```

## Writing own tests

House rules for writing tests:
- The test code is located in `src` folder
- The entry points for the tests need to have "_test_" word in the name to distinguish them from auxiliary files. You can change the entry [here](./webpack.config.js#L8). 
- If static files are required then add them to `./assets` folder. Its content gets copied to the destination folder (`dist`) along with compiled scripts.


**Learn more**

- [k6 Docs: working with modules](https://grafana.com/docs/k6/latest/using-k6/modules/)
- [JavaScript Compatibility Mode](https://grafana.com/docs/k6/latest/using-k6/javascript-compatibility-mode/)
- [grafana/k6-rollup-example](https://github.com/grafana/k6-rollup-example)