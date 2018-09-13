import React from 'react';
import {
  Input,
  TextArea,
  RadioGroup,
  Select,
  DateInput,
  SubNavBar,
  SubNavItem as NavItem,
  Button,
  LinkButton,
  ExpandableText,
  OptionSelect,
  CheckedOption,
  TabBar,
  TabItem
} from '../../dist/ho-react-components'
import Layout from './layout';

class Index extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="heading-xlarge">Example Components</h1>
        <form action="" method="post">

          <h2 className="heading-large">Text input</h2>
          <Input
            name="name"
            label="First name"
            hint="Some additional information"
            error="Oh no! You broke it!"
            value="HELLO!"
          />

          <h2 className="heading-large">Radio group</h2>
          <RadioGroup
            name="number"
            label="Pick a number"
            options={[
              { label: 'One', value: 1 },
              { label: 'Two', value: 2 }
            ]}
            value={1}
            hint="Some additional information"
            error="Oh no! You broke it!"
          />

          <h2 className="heading-large">Checkbox group</h2>
          <RadioGroup
            name="numbers"
            type="checkbox"
            label="Pick some numbers"
            options={[
              { label: 'One', value: 1 },
              { label: 'Two', value: 2 },
              { label: 'Three', value: 3 }
            ]}
            value={[1,3]}
            hint="Some additional information"
            error="Oh no! You broke it!"
          />

          <h2 className="heading-large">Select</h2>
          <Select
            name="number-select"
            label="Pick a number"
            options={[
              { label: 'One', value: 1 },
              { label: 'Two', value: 2 }
            ]}
            value={1}
            hint="Some additional information"
            error="Oh no! You broke it!"
          />

          <h2 className="heading-large">Date input</h2>
          <DateInput
            name="date"
            label="Enter a date"
            value="2018-01-31"
            hint="Some additional information"
            error="Oh no! You broke it!"
          />

          <h2 className="heading-large">Text Area</h2>
          <TextArea
          name="textArea"
          label="Give me some long text"
          hint="Some additional information"
          error="Oh no! You broke it!"
          />

          <h2 className="heading-large" id="buttons">Buttons</h2>
          <h3 className="heading-small">Normal</h3>
          <Button type="button">A Button</Button>
          <h3 className="heading-small">Link</h3>
          <LinkButton href="#buttons">A link button</LinkButton>

          <h2 className="heading-large">Expandable Text</h2>
          <ExpandableText title="Help with nationality">
            <p>If you're not sure about your nationality, try to find out from an official document like a passport or national ID card.</p>
            <p>We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can't provide your nationality, you'll have to send copies of identity documents through the post.</p>
          </ExpandableText>

          <h3 className="heading-large">Sub Nav Bar</h3>
          <SubNavBar>
            <NavItem href="#item1">Item 1</NavItem>
            <NavItem href="#item2">Item 2</NavItem>
            <NavItem href="#item3" active>Item 3</NavItem>
          </SubNavBar>

          <h3 className="heading-medium">Option Select</h3>

          <OptionSelect title="Organisations">
            <CheckedOption name="orgs" id="hmrc" value="hmrc">HM Revenue & Customs (33,576)</CheckedOption>
            <CheckedOption name="orgs" id="moj" value="moj">Ministry of Justice (10,219)</CheckedOption>
            <CheckedOption name="orgs" id="et" value="et">Employment Tribunal (6,704)</CheckedOption>
            <CheckedOption name="orgs" id="ho" value="ho">Home Office (2,714)</CheckedOption>
          </OptionSelect>

          <h3 className="heading-large">Tabs</h3>
          <h4 className="heading-small">Horizontal</h4>
          <TabBar>
            <TabItem href="#tab1">Tab 1</TabItem>
            <TabItem href="#tab2" active={true}>Tab 2</TabItem>
            <TabItem href="#tab3">Tab 3</TabItem>
          </TabBar>

          <h4 className="heading-small">Vertical</h4>
          <div className="grid-row">
            <div className="column-one-third">
              <TabBar vertical={true}>
                <TabItem href="#tab1">Tab 1</TabItem>
                <TabItem href="#tab2" active={true}>Tab 2</TabItem>
                <TabItem href="#tab3">Tab 3</TabItem>
              </TabBar>
            </div>
          </div>
        </form>
      </Layout>
    );
  }
}

export default Index;
