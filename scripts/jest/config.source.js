'use strict';
const babelJest = require('babel-jest');

const moduleNameMapper = {
  'ho-react-components(.*)': '<rootDir>/src$1'
};

module.exports = {
  setupTestFrameworkScriptFile: require.resolve('./setupTests.js'),
  // Only include files directly in __tests__, not in nested folders.
  rootDir: process.cwd(),
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx'],
  timers: 'fake',
  moduleNameMapper: moduleNameMapper,
  snapshotSerializers: [
    "jest-serializer-html",
    "enzyme-to-json/serializer"
  ],
  transform: {
    "^.+\\.js[x]?$": "babel-jest"
  }
};
