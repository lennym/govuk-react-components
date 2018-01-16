import React from 'react';

class Input extends React.Component {

  id() {
    return this.props.id || this.props.name;
  }

  errorClass(cls) {
    return this.props.error ? `${cls} ${cls}-error` : cls;
  }

  checkedOrUnchecked() {
    if(this.props.onChange) {
      return {
        value: this.props.value,
        onChange: this.props.onChange
      };
    }
    return {
      defaultValue: this.props.value
    }
  }

}

export default Input;
