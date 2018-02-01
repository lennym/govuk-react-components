import React from 'react';
import PropTypes from 'prop-types';

export const navItemOf = (Type) => {
  const component = (props) => {
    const {active, className = '', ...other} = props;
    const elemClass = (active ? 'active' : '') + (className ? ' ' + className : '');
    return (
      <li>
        <Type {...other} className={elemClass}>{props.children}</Type>
      </li>
    )
  };
  component.defaultName = 'NavItemOf' + Type;
  component.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool
  };
  return component;
};

export const NavItem = navItemOf('a');
NavItem.propTypes = Object.assign({ href: PropTypes.string.isRequired }, NavItem.propTypes);

export default NavItem;
