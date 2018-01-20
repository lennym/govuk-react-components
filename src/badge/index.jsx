import React from "react";
import PropTypes from 'prop-types';

const Badge = (props) => (
  <strong className={`phase-tag${props.className ? ' ' + props.className : ''}`}>
    {props.children}
  </strong>
);

Badge.defaultProps = {
  children: ''
}

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string
}

export default Badge;