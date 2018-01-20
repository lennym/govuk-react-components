import React from 'react'
import { render } from 'enzyme'
import {Button, LinkButton} from 'govuk-react-components/button';

describe('The Standard Button Component', () => {
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

describe('The link Button Component', () => {
  it('should render as an <a> tag with the mandatory href', () => {
    expect(
      render(<LinkButton href="#test-href">Sample Text</LinkButton>)
    ).toMatchSnapshot()
  })

  it('should append classNames when attribute is passed in', () => {
    expect(
      render(<LinkButton href="#" className="my-additional-classname">Sample Text</LinkButton>)
    ).toMatchSnapshot();
  });

  it('should disable when disabled attribute is passed in', () => {
    expect(
      render(<LinkButton href="#" disabled={true}>Sample Text</LinkButton>)
    ).toMatchSnapshot();
  });
})