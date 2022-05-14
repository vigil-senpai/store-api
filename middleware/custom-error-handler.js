const {CustomError} = require('../error/custom-error')

const customErrorHandler = (err, req, res, next) => {
    if(err instanceof CustomError) {
        res.status(err.status).json({
            success: false, 
            message: err.message
        })
    }
}

module.exports = customErrorHandler