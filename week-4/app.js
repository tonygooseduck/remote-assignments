const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const mysqldump = require('mysqldump');

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
// sign in and sign up homepage
app.get('/', (req, res) => {
  res.render('form');

});

app.post('/signin', (req, res) => {
  let email = req.body.email;
  let sql = `SELECT * FROM user WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
  db.query(sql, (err, result) => {
    if (err) console.log(err.message);
    // succeed to sign in
    if (result.length > 0) {
        res.redirect('/member');
    }

    // fail to sign in
    else res.redirect(404, '/');
  });
});

app.post('/signup', (req, res) => {
  let sql = `SELECT * FROM user WHERE email = '${req.body.email}'`;
  db.query(sql, (err, result) => {
    if (err) console.log(err.message);
    // able to sign up
    if (result.length === 0) {
      let sql = `INSERT INTO user (email, password) VALUES ('${req.body.email}', '${req.body.password}')`;
      db.query(sql, (err, result) => {
        if(err) console.log(err.message);
        if(result.affectedRows === 1) {
          res.redirect('/member');
        }
      });

    }
    // unable to sign up
    else res.redirect(404, '/');
  });
});

app.get('/member', (req, res) => {
  res.render('member');
});

mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'AWShw04@0203',
        database: 'assignment'
    },
    dumpToFile: './dump.sql',
})

app.listen('3000', () => {
  console.log('Server started on port 3000');
});
