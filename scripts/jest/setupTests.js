const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');

process.env.BABEL_ENV='test'

configure({ adapter: new Adapter() });
