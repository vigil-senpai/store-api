const connection = require('./connection')

const connectDatabase = () => {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if(err) {
                reject(err)
            }
            resolve()
        })
    })
}

module.exports = connectDatabase