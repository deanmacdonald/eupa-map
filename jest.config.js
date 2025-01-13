module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup2.js'],
  resolver: '<rootDir>/custom-resolver.js',
  cacheDirectory: '<rootDir>/jest-cache',
  // other configurations
};
