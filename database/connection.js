const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'sqluser', 
    database: 'testdb',
    password: process.env.MYSQL_PASSWORD
})

module.exports = connection