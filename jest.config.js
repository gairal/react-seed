module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.ts', 'src/app/**/*.tsx'],
  coverageReporters: ['html', 'text-summary'],
  errorOnDeprecated: true,
  logHeapUsage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@types': '<rootDir>/src/app/types',
    '@mocks/(.*)$': '<rootDir>/test/__mocks__$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
  preset: 'ts-jest',
  verbose: false,
};
