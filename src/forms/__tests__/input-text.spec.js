import React from 'react'
import { mount, render } from 'enzyme'
import InputText from '../input-text';

describe('The Date Component', () => {

  it('should render correctly when a value is passed in', () => {
    expect(
      render(<InputText label="ip" name="ip" value="someText" />)
    ).toMatchSnapshot()
  });

  it('should render a hint when a hint is passed in', () => {
    expect(
      render(<InputText label="ip" name="ip" value="someText" hint="Testing hint" />)
    ).toMatchSnapshot();
  });

  it('should render an error when an error is passed in', () => {
    expect(
      render(<InputText label="ip" name="ip" value="someText" error="Testing error" />)
    ).toMatchSnapshot();
  });

})
