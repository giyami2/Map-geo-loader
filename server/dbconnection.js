const mysql = require('mysql');

const host = '127.0.0.1';
const port = '3306';
const user = 'root';
const password = '48756oe';
const database = 'mapgeoschem';

const connection = mysql.createPool({
  host: host,
  port: port,
  user: user,
  password: password,
  database: database
});

module.exports=connection;