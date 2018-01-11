const React = require('react');
const GovUK = require('govuk-react-components/components/layout');
const PhaseBanner = require('govuk-react-components/components/phase-banner');

class Layout extends React.Component {
  render() {
    return (
      <GovUK propositionHeader={this.props.propositionHeader} title={this.props.title}>
        <main className="main" id="content">
          <PhaseBanner phase="prototype" />
          <div className="grid-row">

            <div className="column-full">
              { this.props.children }
            </div>

          </div>
        </main>
      </GovUK>
    );
  }
}

module.exports = Layout;