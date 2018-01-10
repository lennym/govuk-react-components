const React = require('react');

class PhaseBanner extends React.Component {

  render() {

    if (!this.props.phase) {
      return;
    }

    return <div className="phase-banner">
      <p>
        <strong className="phase-tag">{this.props.phase}</strong>
        <span>This is a new service – your <a href="#">feedback</a> will help us to improve it.</span>
      </p>
    </div>

  }

}

module.exports = PhaseBanner;
