const React = require('react');
const Layout = require('./layout');
const Input = require('../../components/forms/input-text');
const RadioGroup = require('../../components/forms/radio-group');
const Select = require('../../components/forms/select');
const Date = require('../../components/forms/date');
const SubNavBar = require('../../components/subnavbar').default;
const NavItem = require('../../components/subnavbar').NavItem;
const {Button, LinkButton, InputButton} = require("../../components/button");
const ExpandableText = require('../../components/typography/expandable-text');
const { Card, CardTitle, CardBody } = require('../../components/typography/card/card');


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
          <Date
            name="date"
            label="Enter a date"
            value="2018-01-31"
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

          <h2 className="heading-large">Cards</h2>
          <ul className="grid-row">
            <Card >
              <CardTitle headline="12" subline="certificates available"/>
              <CardBody>
                How many certificates sponsorship have left to use.
              </CardBody>
            </Card>
            <Card>
              <CardTitle headline="6" subline="certificates used"/>
              <CardBody>This is how many certificates sponsorship have used.</CardBody>
            </Card>
          </ul>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
