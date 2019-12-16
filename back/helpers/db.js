const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dinulocal',
    password: '1Didididi!',
    database: 'init'
});

// const connection = require('./helpers/db.js'); for connection

module.exports = connection;