import React from 'react';
import PropTypes from 'prop-types';

const NavItem = CustomNavItem(<a/>);

export const CustomNavItem = (Type) => (
  (props) => (
    <li>
      <Type {...props}>{props.children}</Type>
    </li>
  )
);

NavItem.defaultProps = {
  children: ''
};

NavItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string
};

export default NavItem;
