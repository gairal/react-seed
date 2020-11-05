# react-seed

---

## TODO

- [ ] hot reload

---

> A React Seed [TypeScript](https://www.typescriptlang.org/),
> [Jest](https://jestjs.io/), [Prettier](https://prettier.io/), [eslint](https://eslint.org/) and ❤️

### Table of Contents

- [File structure](#file-structure)
- [Quick Start](#quick-start)
- [Commands](#commands)
- [Creating a new Resource](#creating-a-new-resource)

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
npm i

# start the TypeScript watcher
npm start
```

### Commands

- `npm run build`: Production build generated into ./dist
- `npm run clean`: Deletes build dir ./dist
- `npm run dev`: launches a TypeScript watcher
- `npm run lint`: lints the whole sources and tests with eslint
- `npm test`: runs Jest
- `npm start`: runs the project in production mode
