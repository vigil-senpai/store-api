const { createCustomError } = require("../error/custom-error")

const getAllProducts = (req, res) => {
    return res.status(200).json({
        success: true, 
        products: []
    })
}

const getProduct = (req, res, next) => {
    const condition = false
    if(condition) {
        return res.status(200).json({
            success: true, 
            product: {}
        })
    }
    return next(createCustomError('TestError', 400))
}

module.exports = {
    getAllProducts, 
    getProduct
}