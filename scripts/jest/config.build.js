const sourceConfig = require('./config.source');

const moduleNameMapper = {
  'govuk-react-components(.*)': '<rootDir>/components$1'
};

module.exports = Object.assign({}, sourceConfig, {
  moduleNameMapper: moduleNameMapper
});

console.log('Running tests with govuk-react-components module at /components')
