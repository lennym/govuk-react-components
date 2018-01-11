const React = require('react');
const Layout = require('./layout');

const Input = require('govuk-react-components/components/forms/input-text');
const RadioGroup = require('govuk-react-components/components/forms/radio-group');
const Select = require('govuk-react-components/components/forms/select');
const Date = require('govuk-react-components/components/forms/date');

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
        </form>
      </Layout>
    );
  }
}

module.exports = Index;