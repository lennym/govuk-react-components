import React from 'react';
import PropTypes from 'prop-types';

const SubNavBar = (props) => (
  <div className="navbar">
    <ul className="navbar__list-items">{props.children}</ul>
  </div>
);

SubNavBar.defaultProps = {
  children: ''
};

SubNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default SubNavBar;
