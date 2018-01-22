import React from 'react';
import { render } from 'enzyme'
import Badge from 'govuk-react-components/badge';

describe('The Badge Component', () => {
  it('should render children that are passed in', () => {
    expect(
      render(<Badge>Sample Text</Badge>)
    ).toMatchSnapshot()
  });

  it('should append classNames when attribute is passed in', () => {
    expect(
      render(<Badge className="my-additional-classname">Sample Text</Badge>)
    ).toMatchSnapshot();
  });

});