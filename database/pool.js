const mysql = require('mysql')

const createPool = (host = process.env.HOST, user = process.env.USER, database = process.env.DATABASE, password = process.env.MYSQL_PASSWORD) => {
    return mysql.createPool({
        host: host, 
        user: user, 
        database: database, 
        password: password
    })
}

module.exports = createPool