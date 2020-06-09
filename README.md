<div align="center">
  
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
