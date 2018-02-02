import React from 'react';
import GovUK from '../../components/layout';
import PhaseBanner from '../../components/phase-banner';

class Layout extends React.Component {
  render() {
    return (
      <GovUK propositionHeader={this.props.propositionHeader} title={this.props.title}>
        <main className="main" id="content">
          <PhaseBanner feedbackUrl="https://github.com/lennym/govuk-react-components" />
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

export default Layout;