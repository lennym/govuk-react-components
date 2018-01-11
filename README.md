# govuk-react-components

A set of react components to build the basic elements descibed in [govuk-elements](https://github.com/alphagov/govuk_elements).

## Usage

This is *very* Work In Progress code at the moment so you almost certainly don't want it anywhere near production right now.

Contributions are welcome.

## Loading assets

To include the necessary stylesheets and assets in your app you can - if you are using express - mount the included middleware to serve these files:

```js
app.use(require('govuk-react-components').assets());
```

## Examples

There is a basic example app in `./example`. To run it:

```
$ cd example
$ npm start
$ open http://localhost:8080
```
