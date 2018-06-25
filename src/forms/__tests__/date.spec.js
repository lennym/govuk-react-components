import React from 'react'
import { render } from 'enzyme'
import {DateInput as Date} from 'govuk-react-components';

describe('The Date Component', () => {

  it('should render correctly when a date is passed in', () => {
    expect(
      render(<Date label="dob" name="dob" value="2018-01-10" />)
    ).toMatchSnapshot()
  });

  it('should render a hint when a hint is passed in', () => {
    expect(
      render(<Date label="dob" name="dob" value="2018-01-10" hint="Testing hint" />)
    ).toMatchSnapshot();
  });

  it('should render an error when an error is passed in', () => {
    expect(
      render(<Date label="dob" name="dob" value="2018-01-10" error="Testing error" />)
    ).toMatchSnapshot();
  });

})
