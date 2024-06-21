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

To run a test written in TypeScript, we first have to transpile the TypeScript code into JavaScript running a bundler. This project uses `Babel` and `Webpack` to bundle the different files into ES modules (ESM), using its [`webpack.config.js`](./webpack.config.js) configuration.

The next command transforms each TypeScript test in `./src` to the `./dist` folder as ES modules.

```bash
npm run bundle
```

Once that is done, we can run our script the same way we usually do, for instance:

```bash
k6 run dist/get-200-status-test.js
```

**See also**

- [Using k6 / Modules](https://grafana.com/docs/k6/latest/using-k6/modules/)
- [Using k6 / JavaScript compatibility mode](https://grafana.com/docs/k6/latest/using-k6/javascript-compatibility-mode/)
- [grafana/k6-rollup-example](https://github.com/grafana/k6-rollup-example)
