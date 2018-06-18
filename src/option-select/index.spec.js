import React from 'react'
import { render } from 'enzyme'
import OptionSelect, { CheckedOption } from './index';

describe('Option select container', () => {
  it('should render all required values and be open by default', () => {
    expect(
      render(<OptionSelect title="Title">CONTENT SHOULD BE VISIBLE</OptionSelect>)
    ).toMatchSnapshot()
  });

  it('should render a description when supplied', () => {
    expect(
      render(<OptionSelect title="Title" description="description">CONTENT SHOULD BE VISIBLE</OptionSelect>)
    ).toMatchSnapshot()
  });

  describe('with Checked Options', () => {
    it('should render them as unchecked by default', () => {
      expect(
        render(<OptionSelect title="Title" description="description">
          <CheckedOption name="name" value="1" id="1">1 CONTENT SHOULD BE VISIBLE</CheckedOption>
          <CheckedOption name="name" value="2" id="2">2 CONTENT SHOULD BE VISIBLE</CheckedOption>
          <CheckedOption name="name" value="3" id="3">3 CONTENT SHOULD BE VISIBLE</CheckedOption>
        </OptionSelect>)
      ).toMatchSnapshot()
    });

    it('should render them as checked when specified', () => {
      expect(
        render(<OptionSelect title="Title" description="description">
          <CheckedOption name="name" value="1" id="1">1 CONTENT SHOULD BE VISIBLE</CheckedOption>
          <CheckedOption name="name" value="2" id="2" checked={true}>2 CONTENT SHOULD BE VISIBLE</CheckedOption>
          <CheckedOption name="name" value="3" id="3" checked={false}>3 CONTENT SHOULD BE VISIBLE</CheckedOption>
        </OptionSelect>)
      ).toMatchSnapshot()
    });
  });
});
