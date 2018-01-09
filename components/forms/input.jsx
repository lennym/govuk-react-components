const React = require('react');

class Input extends React.Component {

  id() {
    return this.props.id || this.props.name;
  }

  errorClass(cls) {
    return this.props.error ? `${cls} ${cls}-error` : cls;
  }

}

module.exports = Input;
