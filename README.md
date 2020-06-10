<div align="center">
  
  ![banner](assets/ts-js-k6.png)

# Using typescript with k6

![.github/workflows/push.yml](https://github.com/k6io/example-typescript/workflows/.github/workflows/push.yml/badge.svg?branch=master)

</div>

## Prerequisites

- [k6](https://k6.io/docs/getting-started/installation)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install) (optional)

## Rationale

While JavaScript is great for a myriad of reasons, one area where it fall short is type safety and developer ergonomics. It's perfectly possible to write javascript code that will look OK and behave OK until a certain condition forces the executor into a faulty branch.

While it, of course, still is possible to shoot yourself in the foot with typescript as well, it's significantly harder. Without adding much overhead, Typescript will:

- Improve the ability to safely refactor your code.
- Improve readability and maintainablity.
- Allow you to drop a lot of the defensive code previously needed to make sure consumers are calling functions properly.

## Project layout

This example project is split into four parts:

- **the actual test script**, which contains none of the logic for interacting with the system under test.
- **api endpoint objects**, serving the same purpose as page objects do in the [the page object model](<https://www.guru99.com/page-object-model-pom-page-factory-in-selenium-ultimate-guide.html#:~:text=Page%20Object%20Model%20(POM)%20is,duplication%20and%20improves%20test%20maintenance.>) commonly used for UI testing.
- **models** defining the shape of the data used in the tests
- **helpers**, assisting with common operations.

## Usage

To run a test written in typescript, we first have to transpile and bundle our project

```bash
$ yarn webpack
```

Once that is done, we can run our script the same way we usually do, for instance:

```bash
$ k6 run dist/test.js \
    --vus 10 \
    --duration 10s
```

## Additional resources

- [Examples published in the k6 docs](https://k6.io/docs/examples)
- [Example projects available on GitHub](https://github.com/search?q=topic%3Aexamples+org%3Ak6io&type=Repositories)
- [A curated list of awesome k6 resources](https://github.com/k6io/awesome-k6/)
