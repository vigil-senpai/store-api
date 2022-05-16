const { createCustomError } = require('../error/custom-error')

const databasePromise = (pool, query) => {
    return new Promise((resolve, reject) => {
        pool.query(query, (error, result) => {
            if(error) {
                reject(createCustomError(error.sqlMessage, 500))
            }
            resolve(result)
        })
    })
}

module.exports = databasePromise