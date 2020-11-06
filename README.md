# react-seed

> A React Seed [TypeScript](https://www.typescriptlang.org/),
> [Jest](https://jestjs.io/), [Prettier](https://prettier.io/), [eslint](https://eslint.org/) and ❤️

### Table of Contents

- [File structure](#file-structure)
- [Quick Start](#quick-start)
- [Commands](#commands)

### File structure

```markup
vendor-api-client/
 ├──dist/                            * generated library
 │
 ├──src/                             * source TypeScript Files
 │   ├──app/
 │   │
 │   └──index.ts                     * our lib entry point
 │
 └──*.*                              * configuration files
```

### Quick Start

```bash
# clone the repo
git clone git@github.com:gairal/react-seed.git

# change directory to the repo
cd react-seed

# install the dependencies
yarn

# start the TypeScript watcher
yarn start
```

### Commands

- `yarn run build`: Production build generated into ./dist
- `yarn run clean`: Deletes build dir ./dist
- `yarn run dev`: launches a TypeScript watcher
- `yarn run lint`: lints the whole sources and tests with eslint
- `yarn test`: runs Jest
- `yarn start`: runs the project in production mode
