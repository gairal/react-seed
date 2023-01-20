# react-seed &middot; [![CI Status](https://github.com/gairal/react-seed/workflows/CI/badge.svg)](https://github.com/gairal/react-seed/actions)

> A React Seed [TypeScript](https://www.typescriptlang.org/),
> [Jest](https://jestjs.io/), [Prettier](https://prettier.io/), [eslint](https://eslint.org/) and ❤️

### Table of Contents

- [File structure](#file-structure)
- [Quick Start](#quick-start)
- [Commands](#commands)

### File structure

```markup
react-seed/
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
pnpm i

# start the TypeScript watcher
pnpm start
```

### Commands

- `pnpm build`: Production build generated into ./dist
- `pnpm clean`: Deletes build dir ./dist
- `pnpm dev`: launches a TypeScript watcher
- `pnpm lint`: lints the whole sources and tests with eslint
- `pnpm test`: runs Jest
- `pnpm start`: runs the project in production mode
