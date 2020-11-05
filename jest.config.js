module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['.d.ts'],
  coverageReporters: ['html', 'json', 'text-summary'],
  errorOnDeprecated: true,
  logHeapUsage: true,
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@mocks/(.*)$': '<rootDir>/test/__mocks__$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
  preset: 'ts-jest',
  verbose: false,
};
