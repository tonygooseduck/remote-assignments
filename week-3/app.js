const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');
//assignment 1
app.get('/', (req, res) => {
  res.send('Hello, My Server!');
});
//assignment 2
app.get('/getData', (req, res) => {
  const query = req.query.number;
  if (query) {
    if (Number.isInteger(parseInt(query))) {
      let number = parseInt(query);
      let sum = number * (number + 1) / 2;
      res.send(sum.toString());
    } else {
      res.send('Wrong Parameter');
    }
  } else {
    res.send('Lack of Parameter');
  }
});
//assignment 4
app.get('/myName', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(username);
  } else {
    res.render('form');
  }
});

app.get('/trackName', (req, res) => {
  res.cookie('username', req.query.name);
  res.redirect('/myName');

});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
