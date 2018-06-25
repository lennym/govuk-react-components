const path = require('path');
const express = require('express');
const assets = require('../middleware').assets;

const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'jsx');
app.set('views', path.resolve(__dirname, 'views'));
app.engine('jsx', require('express-react-views').createEngine());

app.use(assets());

app.get('/', (req, res) => {
  res.render('index', { propositionHeader: 'React Examples' });
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
