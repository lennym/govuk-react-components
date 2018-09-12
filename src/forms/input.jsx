import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

  id() {
    return this.props.id || this.props.name;
  }

  errorClass(cls) {
    return this.props.error ? `${cls} ${cls}--error` : cls;
  }

  checkedOrUnchecked() {
    if (this.props.onChange) {
      return {
        value: this.props.value,
        onChange: this.props.onChange
      };
    }
    return {
      defaultValue: this.props.value
    };
  }

}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Input;
