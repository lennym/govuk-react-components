import React from 'react';
import PropTypes from 'prop-types';
import Types from '../types';

import Input from './input';
import MultipleChoice from '../mixins/multiple-choice';

class RadioGroup extends MultipleChoice(Input) {

  optProps(opt) {
    if (this.props.onChange) {
      return {
        onChange: this.props.onChange,
        checked: this.hasValue(opt.value)
      };
    }
    return {
      defaultChecked: this.hasValue(opt.value)
    };
  }

  render() {
    const options = this.normaliseOptions();
    return <div className={this.errorClass('govuk-form-group')}>
      <fieldset id={this.props.id || this.props.name} className={'govuk-fieldset ' + this.props.inline ? 'inline' : ''}>
        <legend className="govuk-fieldset__legend">
          <h2 className="govuk-fieldset__heading govuk-heading-l">{this.props.label}</h2>
        </legend>
        { this.props.hint && <span id={this.id() + '-hint'} className="govuk-hint">{this.props.hint}</span> }
        { this.props.error && <span id={this.id() + '-error'} className="govuk-error-message">{this.props.error}</span> }
        <div className="govuk-radios">
          {
            options.map(opt => (
              <div className="govuk-radios__item" key={this.optionId(opt)}>
                <input
                  className="govuk-radios__input"
                  id={this.optionId(opt)}
                  type={this.props.type}
                  name={this.props.name}
                  value={opt.value}
                  {...this.optProps(opt)}
                />
                <label htmlFor={this.optionId(opt)} className="govuk-label govuk-radios__label">{opt.label}</label>
                { opt.hint && <span className="govuk-hint">{opt.hint}</span> }
              </div>
            ))
          }
        </div>
      </fieldset>
    </div>;
  }

}

RadioGroup.defaultProps = {
  options: [],
  type: 'radio',
  inline: false
};

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
