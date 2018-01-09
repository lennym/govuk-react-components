const React = require('react');
const Input = require('./input');

class RadioGroup extends Input {

  optionId(opt) {
    return `${this.id()}-${opt.value.toString().toLowerCase().replace(/[^a-z0-9\-]/g, '')}`;
  }

  render() {
    const options = this.props.options.map(opt => {
      if (typeof opt === 'string') {
        return {
          label: opt,
          value: opt
        };
      }
      return opt;
    });
    return <div className={this.errorClass('form-group')}>
      <fieldset className={this.props.inline ? 'inline' : ''}>
        <legend className="form-label-bold">{this.props.label}</legend>
        { this.props.hint && <span className="form-hint">{this.props.hint}</span> }
        { this.props.error && <span className="error-message">{this.props.error}</span> }
        {
          this.props.options.map(opt => (
            <div className="multiple-choice">
              <input
                id={this.optionId(opt)}
                type={this.props.type}
                name={this.props.name}
                value={opt.value}
                checked={this.props.value === opt.value}
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

module.exports = RadioGroup;
