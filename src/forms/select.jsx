import React from 'react';
import PropTypes from 'prop-types';
import Types from '../types';

import Input from './input';
import MultipleChoice from '../mixins/multiple-choice';

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
        {...this.checkedOrUnchecked()}
        >
        {
          this.props.nullOption && <option value="">{this.props.nullOption}</option> }
        {
          options.map(opt => (
            <option
              value={opt.value}
              key={opt.value}
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

Select.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  options: Types.options.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string,
  value: Types.value,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  nullOption: PropTypes.string
};

export default Select;
