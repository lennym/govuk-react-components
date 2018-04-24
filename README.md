# govuk-react-components
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

A set of react components to build the basic elements described in [govuk-elements](https://github.com/alphagov/govuk_elements).

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

## components

* [datatable](/src/datatable/README.md)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/117398?v=4" width="100px;"/><br /><sub><b>Leonard Martin</b></sub>](https://github.com/lennym)<br />[💬](#question-lennym "Answering Questions") [💻](https://github.com/lennym/govuk-react-components/commits?author=lennym "Code") [📖](https://github.com/lennym/govuk-react-components/commits?author=lennym "Documentation") [💡](#example-lennym "Examples") [🤔](#ideas-lennym "Ideas, Planning, & Feedback") [👀](#review-lennym "Reviewed Pull Requests") [⚠️](https://github.com/lennym/govuk-react-components/commits?author=lennym "Tests") | [<img src="https://avatars3.githubusercontent.com/u/1285296?v=4" width="100px;"/><br /><sub><b>James Gee</b></sub>](https://github.com/Geeman201)<br />[💬](#question-Geeman201 "Answering Questions") [💻](https://github.com/lennym/govuk-react-components/commits?author=Geeman201 "Code") [📖](https://github.com/lennym/govuk-react-components/commits?author=Geeman201 "Documentation") [💡](#example-Geeman201 "Examples") [🤔](#ideas-Geeman201 "Ideas, Planning, & Feedback") [👀](#review-Geeman201 "Reviewed Pull Requests") [⚠️](https://github.com/lennym/govuk-react-components/commits?author=Geeman201 "Tests") | [<img src="https://avatars0.githubusercontent.com/u/5601214?v=4" width="100px;"/><br /><sub><b>Simon Bailey</b></sub>](https://www.linkedin.com/in/simon-bailey-5006448)<br />[💻](https://github.com/lennym/govuk-react-components/commits?author=thebailers "Code") [⚠️](https://github.com/lennym/govuk-react-components/commits?author=thebailers "Tests") | [<img src="https://avatars1.githubusercontent.com/u/3604142?v=4" width="100px;"/><br /><sub><b>Joe Fitter</b></sub>](http://joefitter.com)<br />[💻](https://github.com/lennym/govuk-react-components/commits?author=joefitter "Code") [📖](https://github.com/lennym/govuk-react-components/commits?author=joefitter "Documentation") [💡](#example-joefitter "Examples") [⚠️](https://github.com/lennym/govuk-react-components/commits?author=joefitter "Tests") |
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
