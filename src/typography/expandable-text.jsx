import React from 'react';
import PropTypes from 'prop-types';

const ExpandableText = ({ title, open, className, children }) => (
  <details open={open} className={className}>
    <summary><span className="summary">{title}</span></summary>
    <div className="panel panel-border-narrow">{children}</div>
  </details>
);

ExpandableText.defaultProps = {
  open: false
}

ExpandableText.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  open: PropTypes.bool,
  className: PropTypes.string
}

export default ExpandableText;