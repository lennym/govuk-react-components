const PropTypes = require('prop-types');

const value = require('./value');

module.exports = PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.shape({
      value,
      label: PropTypes.string
    }),
    value
  ]),
);
