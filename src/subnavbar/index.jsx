import React from 'react';
import PropTypes from 'prop-types';
import NavItemA from './navitem';

export const SubNavBar = (props) => (
  <div className={`navbar${props.className ? ' ' +props.className : ''}`}>
    <ul className="navbar__list-items">{props.children}</ul>
  </div>
);

SubNavBar.defaultProps = {
  children: ''
};

SubNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default SubNavBar;
export const NavItem = NavItemA;
