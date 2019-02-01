const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
    host: 'localhost',
    //port: '3306',
    user: 'root',
    password: 'AWShw04@0203',
    database: 'assignment'
});

db.connect((err) => {
  if(err) {
    console.log(err.message);
  }
  console.log('MySQL connected...');
});

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));


//create database
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE assignment';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});
//create table
app.get('/createtable', (req, res) => {
  let sql = 'CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), password VARCHAR(255))';
  db.query(sql, (err, result) => {
    if(err) console.log(err.message);
    console.log(result);
    res.send('Table created...');
  });
});

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/signin', (req, res) => {
  // add sql code
  res.send(req.body.password);
});

app.post('/signup', (req, res) => {
  //add sql code
  res.send('checking whether already signed up before');
});




app.listen('3000', () => {
  console.log('Server started on port 3000');
});
