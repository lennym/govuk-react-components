import React from 'react'
import { render } from 'enzyme'
import ExpandableText from 'govuk-react-components/typography/expandable-text';

describe('The Expandable Text Component', () => {

  it('should render correctly', () => {
    expect(
      render(<ExpandableText title="Lorem ipsum">Dolor set amet</ExpandableText>)
    ).toMatchSnapshot()
  });

  it('should render correctly when passed a component as a child', () => {
    expect(
      render(<ExpandableText title="Lorem ipsum"><span>Dolor set amet</span></ExpandableText>)
    ).toMatchSnapshot()
  });

  it('should render correctly when passed a component as a title', () => {
    expect(
      render(<ExpandableText title={<span>Lorem ipsum</span>}>Dolor set amet</ExpandableText>)
    ).toMatchSnapshot()
  });

  it('should correctly output the open attr when prop passed', () => {
    expect(
      render(<ExpandableText title="Lorem ipsum" open={true}>Dolor set amet</ExpandableText>)
    ).toMatchSnapshot()
  });

  it('should correctly output the open attr when prop passed', () => {
    expect(
      render(<ExpandableText title="Lorem ipsum" open={true}>Dolor set amet</ExpandableText>)
    ).toMatchSnapshot()
  });

  it('should correctly apply a class when className prop is provided', () => {
    expect(
      render(<ExpandableText title="Lorem ipsum" className="lorem-ipsum">Dolor set amet</ExpandableText>)
    ).toMatchSnapshot()
  });

})