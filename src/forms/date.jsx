import React from 'react';
import Input from './input';
import PropTypes from 'prop-types';
import Types from '../types';

class DateInput extends Input {

  dateFragment(field) {
    return `${this.id()}-${field}`;
  }

  parseValue() {
    const bits = this.props.value.split('-');
    return {
      day: bits[2],
      month: bits[1],
      year: bits[0]
    };
  }

  render() {
    const value = this.parseValue();
    return <div className={this.errorClass('form-group')}>
      <fieldset>
        <legend>
          <span className="form-label-bold">{this.props.label}</span>
          { this.props.hint && <span className="form-hint">{this.props.hint}</span> }
          { this.props.error && <span className="error-message">{this.props.error}</span> }
        </legend>
        <div className="form-date">
          <div className="form-group form-group-day">
            <label className="form-label" htmlFor={this.dateFragment('day')}>Day</label>
            <input className={this.errorClass('form-control')} id={this.dateFragment('day')} name={this.dateFragment('day')} type="number" pattern="[0-9]*" min="1" max="31" defaultValue={value.day} />
          </div>
          <div className="form-group form-group-month">
            <label className="form-label" htmlFor={this.dateFragment('month')}>Month</label>
            <input className={this.errorClass('form-control')} id={this.dateFragment('month')} name={this.dateFragment('month')} type="number" pattern="[0-9]*" min="1" max="12" defaultValue={value.month} />
          </div>
          <div className="form-group form-group-year">
            <label className="form-label" htmlFor={this.dateFragment('year')}>Year</label>
            <input className={this.errorClass('form-control')} id={this.dateFragment('year')} name={this.dateFragment('year')} type="number" pattern="[0-9]*" min="1900" max="2100" defaultValue={value.year} />
          </div>
        </div>
      </fieldset>
    </div>
  }

}

DateInput.defaultProps = {
  value: ''
};

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: Types.date,
  hint: PropTypes.string,
  error: PropTypes.string
};

export default DateInput;
