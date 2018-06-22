const sourceConfig = require('./config.source');

const moduleNameMapper = {
  'govuk-react-components': '<rootDir>/dist/govuk-react-components.js'
};

module.exports = Object.assign({}, sourceConfig, {
  moduleNameMapper: moduleNameMapper
});

console.log('Running tests with govuk-react-components module at /components')
