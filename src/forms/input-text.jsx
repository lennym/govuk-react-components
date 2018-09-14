import React from 'react';
import Input from './input';
import PropTypes from 'prop-types';

class TextInput extends Input {

  render() {
    return <div className={this.errorClass('govuk-form-group')}>
      <label className="govuk-label" htmlFor={this.id()}>{this.props.label}</label>
      { this.props.hint && <span id={this.id() + '-hint'} className="govuk-hint">{this.props.hint}</span> }
      { this.props.error && <span id={this.id() + '-error'} className="govuk-error-message">{this.props.error}</span> }
      <input
        className={this.errorClass('govuk-input')}
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default TextInput;
