module.exports = {
  bail: true,
  verbose: true,
  setupFiles: [ ‘raf/polyfill’, ‘./config/test.config.js’ ],
  moduleDirectories: [ ‘node_modules’, ‘src/shared’ ],
  moduleNameMapper: {
    ‘\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$‘:
      ‘<rootDir>/config/__mocks__/fileMock.js’,
    ‘\\.(css|less|scss)$’: ‘identity-obj-proxy’
  },
  coverageDirectory: ‘coverage’,
  coverageReporters: [ ‘lcov’, ‘text’ ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    ‘src/**/*.spec.jsx?‘,
    ‘!<rootDir>/src/shared/store/actions’
  ]
}
