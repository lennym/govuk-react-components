const path = require('path');
const express = require('express');
const assets = require('../').assets;

const app = express();

app.set('view engine', 'jsx');
app.set('views', path.resolve(__dirname, 'views'));
app.engine('jsx', require('express-react-views').createEngine());

app.use(assets());

app.use((req, res, next) => {
  res.locals.propositionHeader = 'React Examples';
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080);
