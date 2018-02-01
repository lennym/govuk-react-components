import React from 'react'
import {render} from 'enzyme'
import {SubNavBar, NavItem} from 'govuk-react-components/subnavbar';

describe('The SubNavBar Component', () => {
  it('should render children that are passed in', () => {
    expect(
      render(<SubNavBar>Sample Text</SubNavBar>)
    ).toMatchSnapshot()
  });

  it('should render an included classname', () => {
    expect(
      render(<SubNavBar className="class name">Sample Text</SubNavBar>)
    ).toMatchSnapshot()
  })

  describe('With NavItems', () => {
    it('should render a navitem inside a subnavbar', () => {
      expect(
        render(
          <SubNavBar>
            <NavItem href="#test">Item A</NavItem>
          </SubNavBar>
        )
      ).toMatchSnapshot()
    });

    it('should render multiple navitems inside a subnavbar', () => {
      expect(
        render(
          <SubNavBar>
            <NavItem href="#itema">Item A</NavItem>
            <NavItem href="#itemb">Item B</NavItem>
          </SubNavBar>
        )
      ).toMatchSnapshot();
    })

    it('should render an included classname', () => {
      expect(
        render(
          <SubNavBar>
            <NavItem href="#test" className="test class-name">Item A</NavItem>
          </SubNavBar>
        )
      ).toMatchSnapshot()
    });

    it('should render with an active class if the active flag is true', () => {
      expect(
        render(
          <SubNavBar>
            <NavItem href="#test" className="test class-name" active>Item A</NavItem>
          </SubNavBar>
        )
      ).toMatchSnapshot()
    })
  })
});

