# @ukhomeoffice/react-components
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)

A set of react components to build the basic elements descibed in [GOV.UK Design System](https://design-system.service.gov.uk/).

## Details

This is a fork of [govuk-react-components](https://github.com/lennym/govuk-react-components) which replaces
the older [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit) with the newer
[govuk-frontend](https://github.com/alphagov/govuk-frontend) styles based on the GOV.UK Design System, and adds some
additional Home Office specific components.

## Using components
Install the package and any dependencies you have:
```bash
# Install @ukhomeoffice/react-components
npm install --save @ukhomeoffice/react-components

# This project assumes react & prop-types are installed already. If not use the following
npm install --save @ukhomeoffice/react-components react prop-types
```

Components can then be used in the following way:
```jsx
import React from 'react';
import { Input, Button } from '@ukhomeoffice/react-components';

const MyForm = () => (
  <form>
    <Input name="name"
           label="First name"
           hint="Some additional information"
           error="Oh no! You broke it!"
           value="HELLO!"
    />
    <Button>Submit</Button>
  </form>
);

export default MyForm;
```

## Examples

There is a basic example app in `./example`. To run it:

```
$ cd example
$ npm start
$ open http://localhost:8080
```
