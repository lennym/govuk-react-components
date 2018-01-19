import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button {...props} className={`button${props.className ? ' ' + props.className : ''}`}>
    {props.children}
  </button>
);

Button.defaultProps = {
  children: ''
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Button;
