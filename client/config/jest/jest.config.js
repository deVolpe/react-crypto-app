module.exports = {
  verbose: true,
  rootDir: '../../',
  moduleNameMapper: {
    '\\.(png|jpe?g|gif|svg|woff2?|eot|(t|o)tf)$':
      '<rootDir>/config/jest/__mocks__/fileMock.js',
    '\\.(s?css)$': 'identity-oj-proxy',
  },
  roots: [
    '<rootDir>/src/components/',
    '<rootDir>/src/containers/',
    '<rootDir>/src/hoc-components/',
    '<rootDir>/src/modules/',
    '<rootDir>/src/pages/',
    '<rootDir>/src/service/',
    '<rootDir>/src/utils/',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.js',
    '<rootDir>/src/containers/*.js',
    '<rootDir>/src/hoc-components/**/*.js',
    '<rootDir>/src/modules/**/*.js',
    '<rootDir>/src/pages/**/*.js',
    '<rootDir>/src/utils/*.js',
  ],
};
