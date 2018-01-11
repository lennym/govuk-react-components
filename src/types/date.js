const date = (props, name, component) => {
  if (props[name] && !/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/.test(props[name])) {
    return new Error(
      'Invalid prop `' + name + '` supplied to' +
      ' `' + component + '`. Not a valid date (YYYY-MM-DD).'
    );
  }
}

export default date;