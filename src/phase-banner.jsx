import React from 'react';
import PropTypes from 'prop-types';
import Badge from './badge';

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
        <Badge>{this.props.phase}</Badge>
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