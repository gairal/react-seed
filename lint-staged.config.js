module.exports = {
  // Using fake extensions is a trick to run tasks concurrently.
  // See https://github.com/okonet/lint-staged/issues/934
  // Run type-check to all TypeScript files
  "*.{ts,tsx,type-check}": () => "pnpm typecheck",
  // Run ESLint on changed TypeScript files
  "*.{ts,tsx,lint}": (filenames) => `pnpm lint --fix ${filenames.join(" ")}`,
  "*.{json,scss,css,md,prettierrc,eslintrc}": (filenames) =>
    `prettier --write ${filenames.join(" ")}`,
};
