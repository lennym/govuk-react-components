import React from 'react';
import PropTypes from 'prop-types';

const ExpandableText = ({ title, children }) => (
  <details>
    <summary><span className="summary">{title}</span></summary>
    <div className="panel panel-border-narrow">
      {children}
    </div>
  </details>
);

ExpandableText.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}

export default ExpandableText;