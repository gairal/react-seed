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
    '@components/(.*)': '<rootDir>/src/app/components/$1',
    '@tests/(.*)': '<rootDir>/__tests__/$1',
  },
  preset: 'ts-jest',
  verbose: false,
};
