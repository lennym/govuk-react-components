import React from 'react'
import { render } from 'enzyme'
import Button from 'govuk-react-components/button';

describe('The Button Component', () => {

  it('should render children that are passed in', () => {
    expect(
      render(<Button>Sample Text</Button>)
    ).toMatchSnapshot()
  });

  it('should append classNames when attribute is passed in', () => {
    expect(
      render(<Button className="my-additional-classname">Sample Text</Button>)
    ).toMatchSnapshot();
  });

  it('should disable when disabled attribute is passed in', () => {
    expect(
      render(<Button disabled={true}>Sample Text</Button>)
    ).toMatchSnapshot();
  });

});
