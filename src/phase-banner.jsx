import React from 'react';
import PropTypes from 'prop-types';

class PhaseBanner extends React.Component {

  renderContent() {
    if (this.props.children) {
      return this.props.children;
    } else if (this.props.feedbackUrl) {
      return <span>This is a new service – your <a href={this.props.feedbackUrl}>feedback</a> will help us to improve it.</span>
    }
  }

  render() {

    return <div className="phase-banner">
      <p>
        <strong className="phase-tag">{this.props.phase}</strong>
        { this.renderContent() }
      </p>
    </div>

  }

}




PhaseBanner.defaultProps = {
  phase: 'prototype'
};

PhaseBanner.propTypes = {
  phase: PropTypes.oneOf(['prototype', 'alpha', 'beta']),
  feedbackUrl: PropTypes.string
};

export default PhaseBanner;