# govuk-react-components
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/1285296?v=4" width="100px;"/><br /><sub><b>James Gee</b></sub>](https://github.com/Geeman201)<br />[💻](https://github.com/lennym/govuk-react-components/commits?author=Geeman201 "Code") [👀](#review-Geeman201 "Reviewed Pull Requests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!