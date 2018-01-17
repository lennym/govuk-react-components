import React from 'react'
import { mount, render } from 'enzyme'
import PhaseBanner from 'govuk-react-components/phase-banner';

describe('The Phase Banner Component', () => {

  it('should render a phase of "prototype" by default', () => {
    expect(
      render(<PhaseBanner />)
    ).toMatchSnapshot()
  });

  it('should render the phase when provided', () => {
    expect(
      render(<PhaseBanner phase="beta" />)
    ).toMatchSnapshot()
  });

  it('should contain any children that are passed', () => {
    expect(
      render(<PhaseBanner phase="beta"><span>My own custom text</span></PhaseBanner>)
    ).toMatchSnapshot()
  });

  it('should contain default text and link if a feedback url is provided', () => {
    expect(
      render(<PhaseBanner phase="beta" feedbackUrl="http://example.com" />)
    ).toMatchSnapshot()
  });

  it('should be empty if no feedbackUrl or children are provided', () => {
    expect(
      render(<PhaseBanner phase="beta" />)
    ).toMatchSnapshot()
  });

})
