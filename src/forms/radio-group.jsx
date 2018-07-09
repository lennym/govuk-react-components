import React from 'react';
import PropTypes from 'prop-types';
import Types from '../types';

import Input from './input';
import MultipleChoice from '../mixins/multiple-choice';

class RadioGroup extends MultipleChoice(Input) {

  static defaultProps = {
    options: [],
    type: 'radio',
    inline: false
  };

  optProps(opt) {
    if (this.props.onChange) {
      return {
        onChange: this.props.onChange,
        checked: this.hasValue(opt.value)
      }
    }
    return {
     defaultChecked: this.hasValue(opt.value)
    }
  }

  render() {
    const options = this.normaliseOptions();
    return <div className={this.errorClass('form-group')}>
      <fieldset id={this.props.id || this.props.name} className={this.props.inline ? 'inline' : ''}>
        <legend className="form-label-bold">{this.props.label}</legend>
        { this.props.hint && <span className="form-hint">{this.props.hint}</span> }
        { this.props.error && <span className="error-message">{this.props.error}</span> }
        {
          options.map(opt => (
            <div className="multiple-choice" key={this.optionId(opt)}>
              <input
                id={this.optionId(opt)}
                type={this.props.type}
                name={this.props.name}
                value={opt.value}
                {...this.optProps(opt)}
              />
              <label htmlFor={this.optionId(opt)}>{opt.label}</label>
            </div>
          ))
        }
      </fieldset>
    </div>
  }

}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: Types.options.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.oneOf(['radio', 'checkbox']),
  inline: PropTypes.bool,
  value: PropTypes.oneOfType([Types.value, PropTypes.arrayOf(Types.value)]),
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default RadioGroup;
