const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dinulocal',
    password: '1Didididi!',
    database: 'init'
})

module.exports = connection;