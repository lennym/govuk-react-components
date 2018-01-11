const React = require('react');
const PropTypes = require('prop-types');
const Types = require('../types');

const Input = require('./input');
const MultipleChoice = require('../mixins/multiple-choice');

class RadioGroup extends MultipleChoice(Input) {

  render() {
    const options = this.normaliseOptions();
    return <div className={this.errorClass('form-group')}>
      <fieldset className={this.props.inline ? 'inline' : ''}>
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
                defaultChecked={this.hasValue(opt.value)}
                />
              <label htmlFor={this.optionId(opt)}>{opt.label}</label>
            </div>
          ))
        }
      </fieldset>
    </div>
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
  id: PropTypes.string,
  type: PropTypes.oneOf(['radio', 'checkbox']),
  inline: PropTypes.bool,
  value: PropTypes.oneOfType([Types.value, PropTypes.arrayOf(Types.value)]),
  hint: PropTypes.string,
  error: PropTypes.string
};

module.exports = RadioGroup;
