import React from 'react'
import { render } from 'enzyme'
import {Select} from 'govuk-react-components';

describe('The Select Component', () => {

  it('should render correctly with no options', () => {
    expect(
      render(<Select label="test" name="test" options={[]} />)
    ).toMatchSnapshot()
  });

  it('should render correctly with multiple options', () => {
    expect(
      render(<Select label="test" name="test" options={[{ label: 'opt1-label', value: 'opt1' }, { label: 'opt2-label', value: 'opt2' }]} />)
    ).toMatchSnapshot()
  });


  it('should render correctly with multiple options and one selected', () => {
    expect(
      render(<Select label="test" name="test" value={'opt2'} onChange={() => { }} options={[{ label: 'opt1-label', value: 'opt1' }, { label: 'opt2-label', value: 'opt2' }]} />)
    ).toMatchSnapshot()
  });

  it('should render a hint when a hint is passed in', () => {
    expect(
      render(<Select label="test" name="test" options={[]} hint="Testing hint" />)
    ).toMatchSnapshot();
  });

  it('should render an error when an error is passed in', () => {
    expect(
      render(<Select label="test" name="test" options={[]} error="Testing error" />)
    ).toMatchSnapshot();
  });

})
