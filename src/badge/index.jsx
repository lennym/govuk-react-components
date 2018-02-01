import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props) => (
  <strong className={`phase-tag${props.className ? ' ' + props.className : ''}`}>
    {props.children}
  </strong>
);

Badge.defaultProps = {
  children: ''
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Badge;
