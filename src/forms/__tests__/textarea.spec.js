import React from 'react'
import { render, shallow } from 'enzyme'
import TextArea from 'govuk-react-components/forms/textarea';

describe('The TextArea Component', () => {

  it('should render the value as content when a value is passed in', () => {
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

  it('should call the onChange function when a change is simulated', () => {
    const newVal = 'someText';
    const onChange = jest.fn();
    const field = shallow(<TextArea label="ip" name="ip" onChange={onChange} />);
    field.find('textarea').simulate('change', newVal);
    expect(onChange).toBeCalledWith(newVal);
  });

  it('should render cols & rows when props are given', () => {
    expect(
      render(<TextArea label="ip" name="ip" value="someText" rows={8} cols={10}/>)
    ).toMatchSnapshot()
  })
})
