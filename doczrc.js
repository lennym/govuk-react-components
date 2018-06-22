import { babel } from 'docz-plugin-babel6';
import { css } from 'docz-plugin-css'


export default {
  title: 'govuk-react-components',
  wrapper:'docz/docz-wrapper.js',
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true
    }),
    babel()
  ]
}
