import React from 'react';
import {Layout, PhaseBanner} from '../../dist/ho-react-components';


class Page extends React.Component {
  render() {
    return (
      <Layout propositionHeader={this.props.propositionHeader} title={this.props.title}>
        <main className="main" id="content">
          <PhaseBanner feedbackUrl="https://github.com/ukhomeoffice/react-components" />
          <div className="grid-row">

            <div className="column-full">
              { this.props.children }
            </div>

          </div>
        </main>
      </Layout>
    );
  }
}

export default Page;
