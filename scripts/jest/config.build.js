const sourceConfig = require('./config.source');

const moduleNameMapper = {
  'ho-react-components': '<rootDir>/dist/ho-react-components.js'
};

module.exports = Object.assign({}, sourceConfig, {
  moduleNameMapper: moduleNameMapper
});

console.log('Running tests with ho-react-components module at /components')
