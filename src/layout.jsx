import React from 'react';
import PropTypes from 'prop-types';

class Layout extends React.Component {

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{ this.props.title || this.props.propositionHeader }</title>

          <link rel="stylesheet" media="screen" href={`${ this.props.assetPath }/stylesheets/govuk-template.css?0.23.0`}/>
          <link rel="stylesheet" media="screen" href={`${ this.props.assetPath }/stylesheets/fonts.css?0.23.0`}/>
          {
            this.props.stylesheets.map(file => (
              <link rel="stylesheet" media="screen" href={file} key={file} />
            ))
          }
          <link rel="stylesheet" media="print" href={`${ this.props.assetPath }/stylesheets/govuk-template-print.css?0.23.0`}/>

          <link rel="shortcut icon" href={`${ this.props.assetPath }/images/favicon.ico?0.23.0`} type="image/x-icon" />
          <link rel="mask-icon" href={`${ this.props.assetPath }/images/gov.uk_logotype_crown.svg?0.23.0`} color="#0b0c0c"/>
          <link rel="apple-touch-icon" sizes="180x180" href={`${ this.props.assetPath }/images/apple-touch-icon-180x180.png?0.23.0`}/>
          <link rel="apple-touch-icon" sizes="167x167" href={`${ this.props.assetPath }/images/apple-touch-icon-167x167.png?0.23.0`}/>
          <link rel="apple-touch-icon" sizes="152x152" href={`${ this.props.assetPath }/images/apple-touch-icon-152x152.png?0.23.0`}/>
          <link rel="apple-touch-icon" href={`${ this.props.assetPath }/images/apple-touch-icon.png?0.23.0`}/>
          <meta name="theme-color" content="#0b0c0c" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="og:image" content={`${ this.props.assetPath }/images/opengraph-image.png?0.23.0`}/>
        </head>

        <body>

          <div id="skiplink-container">
            <div>
              <a href={this.props.skipToContentTarget} className="skiplink">{ this.props.skipToContent }</a>
            </div>
          </div>

          <header role="banner" id="global-header" className={this.props.propositionHeader ? 'with-proposition' : ''}>
            <div className="header-wrapper">
              <div className="header-global">
                <div className="header-logo">
                  <a href={ this.props.homepageUrl } title={ this.props.logoLinkTitle } id="logo" className="content">
                    <img src={`${ this.props.assetPath }/images/gov.uk_logotype_crown_invert_trans.png?0.23.0`} width="36" height="32" alt="" /> { this.props.globalHeaderText }
                  </a>
                </div>
              </div>
              {
                this.props.propositionHeader &&
                <div className="header-proposition">
                  <div className="content">
                    <nav id="proposition-menu">
                      {
                        this.props.propositionHeaderLink &&
                        <a href={this.props.propositionHeaderLink} id="proposition-name">{this.props.propositionHeader}</a>
                      }
                      {
                        !this.props.propositionHeaderLink && this.props.propositionHeader
                      }
                    </nav>
                    {
                      this.props.headerContent && this.props.headerContent
                    }
                  </div>
                </div>
              }
            </div>
          </header>

          <div id="global-header-bar"></div>

          {this.props.children}

          <footer className="group js-footer" id="footer" role="contentinfo">

            <div className="footer-wrapper">

              <div className="footer-meta">
                <div className="footer-meta-inner">
                  {
                    this.props.footerLinks.length && (
                      <ul>
                        {
                          this.props.footerLinks.map(link => (
                            <li key={ link.href }><a href={ link.href }>{ link.label }</a></li>
                          ))
                        }
                      </ul>
                    )
                  }
                  <div className="open-government-licence">
                    <p className="logo"><a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence</a></p>
                    <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>
                  </div>
                </div>

                <div className="copyright">
                  <a href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/">© Crown copyright</a>
                </div>
              </div>
            </div>
          </footer>

          <div id="global-app-error" className="app-error hidden"></div>

          <script src={`${this.props.assetPath}/javascripts/govuk-template.js?0.23.0`}></script>
          {
            this.props.scripts.map(file => (
              <script src={file} key={file}></script>
            ))
          }
          <script nonce={this.props.nonce}>if (typeof window.GOVUK === 'undefined') document.body.className = document.body.className.replace('js-enabled', '');</script>
        </body>
      </html>
    );
  }

};

Layout.defaultProps = {
  assetPath: '/govuk',
  stylesheets: ['/govuk/elements.css'],
  scripts: [],
  homepageUrl: 'https://www.gov.uk',
  propositionHeaderLink: '/',
  logoLinkTitle: '',
  skipToContent: 'Skip to main content',
  skipToContentTarget: '#content',
  footerLinks: [],
  globalHeaderText: 'GOV.UK'
};

Layout.propTypes = {
  children: PropTypes.node,

  propositionHeader: PropTypes.string,
  title: PropTypes.string,

  assetPath: PropTypes.string,
  stylesheets: PropTypes.arrayOf(PropTypes.string),
  scripts: PropTypes.arrayOf(PropTypes.string),
  homepageUrl: PropTypes.string,
  logoLinkTitle: PropTypes.string,
  globalHeaderText: PropTypes.string,
  propositionHeaderLink: PropTypes.string,
  skipToContent: PropTypes.string,
  skipToContentTarget: PropTypes.string,
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string
    })
  )
}

export default Layout;
