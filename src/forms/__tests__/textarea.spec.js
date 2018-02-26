import React from 'react'
import { render } from 'enzyme'
import TextArea from 'govuk-react-components/forms/textarea';

describe('The Input Text Component', () => {

  it('should render correctly when a value is passed in', () => {
    expect(
      render(<TextArea label="ip" name="ip" value="someText" />)
    ).toMatchSnapshot()
  });

  it('should render a hint when a hint is passed in', () => {
    expect(
      render(<TextArea label="ip" name="ip" value="someText" hint="Testing hint" />)
    ).toMatchSnapshot();
  });

  it('should render an error when an error is passed in', () => {
    expect(
      render(<TextArea label="ip" name="ip" value="someText" error="Testing error" />)
    ).toMatchSnapshot();
  });

  it('should render as a checked input correctly', () => {
    expect(
      render(<TextArea label="ip" name="ip" value="someText" onChange={() => { }} />)
    ).toMatchSnapshot();
  });

  it('should render cols & rows', () => {
    expect(
      render(<TextArea label="ip" name="ip" value="someText" rows={8} cols={10}/>)
    ).toMatchSnapshot()
  })
})
