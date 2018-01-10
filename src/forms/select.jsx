const React = require('react');

const Input = require('./input');
const MultipleChoice = require('./mixins/multiple-choice');

class Select extends MultipleChoice(Input) {

  render() {
    const options = this.normaliseOptions();
    return <div className={this.errorClass('form-group')}>
      <label className="form-label" htmlFor={this.id()}>
        <span className="form-label-bold">{this.props.label}</span>
        { this.props.hint && <span className="form-hint">{this.props.hint}</span> }
        { this.props.error && <span className="error-message">{this.props.error}</span> }
      </label>
      <select
        className={this.errorClass('form-control')}
        id={this.id()}
        name={this.props.name}
        >
        {
          this.props.nullOption && <option value="">{this.props.nullOption}</option> }
        }
        {
          this.props.options.map(opt => (
            <option
              value={opt.value}
              key={opt.value}
              selected={this.hasValue(opt.value)}
              >{opt.label}</option>
          ))
        }
      </select>
    </div>;
  }

}

Select.defaultProps = {
  options: [],
  nullOption: 'Select...'
};

module.exports = Select;
