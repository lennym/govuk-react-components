import React from 'react';

class Input extends React.Component {

  id() {
    return this.props.id || this.props.name;
  }

  errorClass(cls) {
    return this.props.error ? `${cls} ${cls}-error` : cls;
  }

}

export default Input;
