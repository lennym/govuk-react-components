import React from 'react'
import {render} from 'enzyme'
import {TabBar} from 'govuk-react-components/tabbar';
import {TabItem} from 'govuk-react-components/tabbar/tabitem';

describe('The TabBar Component', () => {
  it('should render children that are passed in', () => {
    expect(
      render(<TabBar>Sample Text</TabBar>)
    ).toMatchSnapshot()
  });

  it('should render an included classname', () => {
    expect(
      render(<TabBar className="class name">Sample Text</TabBar>)
    ).toMatchSnapshot()
  })

  it('should render with a vertical class name with a "vertical" prop', () => {
    expect(
      render(<TabBar className="class name" vertical={true}>Sample Text</TabBar>)
    ).toMatchSnapshot()
  })

  describe('With NavItems', () => {
    it('should render a navitem inside a subnavbar', () => {
      expect(
        render(
          <TabBar>
            <TabItem href="#test">Item A</TabItem>
          </TabBar>
        )
      ).toMatchSnapshot()
    });

    it('should render multiple navitems inside a subnavbar', () => {
      expect(
        render(
          <TabBar>
            <TabItem href="#itema">Item A</TabItem>
            <TabItem href="#itemb">Item B</TabItem>
          </TabBar>
        )
      ).toMatchSnapshot();
    })

    it('should render an included classname', () => {
      expect(
        render(
          <TabBar>
            <TabItem href="#test" className="class-name">Item A</TabItem>
          </TabBar>
        )
      ).toMatchSnapshot()
    });

    it('should render with an active class if the active flag is true', () => {
      expect(
        render(
          <TabBar>
            <TabItem href="#test" className="class-name" active={true}>Item A</TabItem>
          </TabBar>
        )
      ).toMatchSnapshot()
    })
  })
});

