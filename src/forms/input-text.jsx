import React from 'react';
import Input from './input';
import PropTypes from 'prop-types';

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
        {...this.checkedOrUnchecked()}
        />
    </div>;
  }

}

TextInput.defaultProps = {
  type: 'text'
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
