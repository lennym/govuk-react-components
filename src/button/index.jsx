import React from 'react';
import PropTypes from 'prop-types';

export const buttonOf = (Type) => {
  const component = (props) => (
    <Type {...props} className={`button${props.className ? ' ' + props.className : ''}`}>{props.children}</Type>
  );
  component.defaultName = 'ButtonOfType' + Type
  component.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
  };
  return component;
};

export const Button = buttonOf('button');
Button.propTypes = Object.assign({ type: PropTypes.string }, Button.propTypes);

export const LinkButton = buttonOf('a');
LinkButton.propTypes = Object.assign({ href: PropTypes.string.isRequired }, LinkButton.propTypes);

export default Button;
