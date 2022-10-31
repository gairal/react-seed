module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/app/**/*.ts", "src/app/**/*.tsx"],
  coverageReporters: ["html", "text-summary"],
  errorOnDeprecated: true,
  logHeapUsage: true,
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "~/(.*)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: false,
};
