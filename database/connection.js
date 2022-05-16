const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.HOST, 
    user: process.env.USER, 
    database: process.env.DATABASE,
    password: process.env.MYSQL_PASSWORD
})

module.exports = connection