import * as React from 'react';
import PropTypes from 'prop-types';

export const tabItemOf = (Type) => {
  const component = (props)  => {
    const {active, disabled, className = '', ...other} = props;
    const elemClass = (active ? 'active' : '') + (className ? ' ' + className : '');
    return (
      <li>
        <Type {...other} className={elemClass} disabled={disabled}>{props.children}</Type>
      </li>
    )
  };
  component.displayName = 'NavItemOf' + Type;
  component.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool
  };
  return component;
};

export const TabItem = tabItemOf('a');
TabItem.propTypes = Object.assign({ href: PropTypes.string.isRequired }, TabItem.propTypes);

export default TabItem;
