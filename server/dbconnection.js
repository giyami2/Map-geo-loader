const mysql = require('mysql');

const host = '';
const port = '';
const user = '';
const password = '';
const database = '';

const connection = mysql.createPool({
  host: host,
  port: port,
  user: user,
  password: password,
  database: database
});

module.exports=connection;
