const React = require('react');
const Input = require('./input');

class TextInput extends Input {

  render() {
    return <div className={this.errorClass('form-group')}>
      <label className="form-label" htmlFor={this.id()}>
        <span className="form-label-bold">{this.props.label}</span>
        { this.props.hint && <span className="form-hint">{this.props.hint}</span> }
        { this.props.error && <span className="error-message">{this.props.error}</span> }
      </label>
      <input
        className={this.errorClass('form-control')}
        id={this.id()}
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        />
    </div>;
  }

}

TextInput.defaultProps = {
  type: 'text'
};

module.exports = TextInput;
