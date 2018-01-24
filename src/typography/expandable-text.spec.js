import React from 'react'
import { render } from 'enzyme'
import ExpandableText from 'govuk-react-components/typography/expandable-text';

describe('The Expandable Text Component', () => {

  it('should render correctly', () => {
    expect(
      render(<ExpandableText title="Lorem ipsum">Dolor set amet</ExpandableText>)
    ).toMatchSnapshot()
  });

})