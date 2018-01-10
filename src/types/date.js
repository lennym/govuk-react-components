const PropTypes = require('prop-types');

module.exports = (props, name, component) => {

  if (!/^[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}$/.test(props[name])) {
    return new Error(
      'Invalid prop `' + name + '` supplied to' +
      ' `' + component + '`. Not a valid date (YYYY-MM-DD).'
    );
  }

};
