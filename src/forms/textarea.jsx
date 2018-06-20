import React from 'react';
import Input from './input';
import PropTypes from 'prop-types';

class TextArea extends Input {

  render() {
    const {label, hint, error, name, rows, cols, disabled, readonly, ...other} = this.props;
    return <div className={this.errorClass('form-group')}>
      <label className="form-label" htmlFor={this.id()}>
        <span className="form-label-bold">{label}</span>
        { hint && <span className="form-hint">{hint}</span> }
        { error && <span className="error-message">{error}</span> }
      </label>
      <textarea
        className={this.errorClass('form-control')}
        id={this.id()}
        name={name}
        rows={rows}
        cols={cols}
        disabled={disabled}
        readOnly={readonly}
        {...other}
        {...this.checkedOrUnchecked()}
        />
    </div>;
  }

}

TextArea.defaultProps = {
  disabled: false,
  readonly: false,
  rows: 4
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool
};

export default TextArea;
