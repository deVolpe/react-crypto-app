module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(png|jpe?g|gif|svg|woff2?|eot|(t|o)tf)$':
      '<rootDir>config/jest/__mocks__/fileMock.js',
    '\\.(s?css)$': 'identity-obj-proxy',
  },
  rootDir: '../../',
  roots: [
    '<rootDir>src/components/',
  ],
  collectCoverageFrom: [
    '<rootDir>src/components/**/*.js',
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  modulePathIgnorePatterns: ['<rootDir>build/', '<rootDir>node_modules/'],
  coverageDirectory: '<rootDir>coverage/',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['<rootDir>src/modules/store.js'],
  coverageThreshold: {
    global: {
      branches: 89,
      functions: 89,
      lines: 89,
      statements: 89,
    },
  },
};
