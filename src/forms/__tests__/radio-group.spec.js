import React from 'react'
import { mount, render } from 'enzyme'
import RadioGroup from 'govuk-react-components/forms/radio-group';

describe('The Radio Group Component', () => {

  it('should render correctly with no options', () => {
    expect(
      render(<RadioGroup label="test" name="test" options={[]} />)
    ).toMatchSnapshot()
  });

  it('should render correctly with multiple options', () => {
    expect(
      render(<RadioGroup label="test" name="test" options={[{ label: 'opt1-label', value: 'opt1' }, { label: 'opt2-label', value: 'opt2' }]} />)
    ).toMatchSnapshot()
  });

  it('should render correctly with multiple options and one selected', () => {
    expect(
      render(<RadioGroup label="test" name="test" value={'opt2'} options={[{ label: 'opt1-label', value: 'opt1' }, { label: 'opt2-label', value: 'opt2' }]} />)
    ).toMatchSnapshot()
  });

  it('should render correctly as a controlled input with multiple options and one selected', () => {
    expect(
      render(<RadioGroup label="test" name="test" onChange={() => { }} value={'opt2'} options={[{ label: 'opt1-label', value: 'opt1' }, { label: 'opt2-label', value: 'opt2' }]} />)
    ).toMatchSnapshot()
  });

  it('should render a hint when a hint is passed in', () => {
    expect(
      render(<RadioGroup label="test" name="test" options={[]} hint="Testing hint" />)
    ).toMatchSnapshot();
  });

  it('should render an error when an error is passed in', () => {
    expect(
      render(<RadioGroup label="test" name="test" options={[]} error="Testing error" />)
    ).toMatchSnapshot();
  });

})
