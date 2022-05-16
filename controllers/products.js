const uuid = require('uuid')

const { createCustomError } = require("../error/custom-error")
const createPool = require('../database/pool')
const asyncWrapper = require('../middleware/async-wrapper')
const databasePromise = require('../database/promise')

const getAllProducts = asyncWrapper(async (req, res) => {
    const pool = createPool()
    const query = 'SELECT * FROM Product;'
    const productsSelected = await databasePromise(pool, query)
    return res.status(200).json({
        success: true, 
        products: productsSelected
    })
})

const getProduct = asyncWrapper (async (req, res, next) => {
    const pool = createPool()
    const searchedProductID = req.params.ID
    const query = `SELECT * FROM Product WHERE ProductID = '${searchedProductID}';`
    const productSelected = await databasePromise(pool, query)
    if(productSelected[0]) {
        return res.status(200).json({
            success: true, 
            product: productSelected[0]
        })
    }
    return next(createCustomError('Product Not Found', 404))
})

const createProduct = asyncWrapper(async (req, res, next) => {
    const pool = createPool()
    let query = `SELECT CompanyID FROM Company WHERE CompanyName = '${req.body.company}';`
    const company = await databasePromise(pool, query)
    if(!company[0]) {
        return next(createCustomError('Company Doesn\'t Exist', 404))
    }
    if(!(req.body.name && req.body.price && req.body.company)) {
        return next(createCustomError('Name, price, and company are needed', 400))
    }
    const productID = uuid.v4()
    const productName = req.body.name
    const productPrice = req.body.price
    const productRating = req.body.rating || 4.5
    const featured = req.body.featured == true ? 1 : 0
    const companyID = company[0].CompanyID
    query = `INSERT INTO Product VALUES('${productID}', '${productName}', ${productPrice}, ${productRating}, ${featured}, '${companyID}')`
    await databasePromise(pool, query)
    return res.status(200).json({
        success: true, 
        product: {
            ID: productID, 
            name: productName, 
            price: productPrice, 
            rating: productRating, 
            featured: featured, 
            companyID: companyID
        }
    })
})

const updatePorduct = asyncWrapper(async (req, res, next) => {
    const productID = req.body.productID
    const changedKey = req.body.changedKey
    const changedVal = req.body.changedVal

    if(!(productID && changedKey && changedVal)) {
        next(createCustomError('Parameter not complete', 400))
    }
    let query = `UPDATE Product SET ${changedKey} = ${changedVal} WHERE ProductID = '${productID}';`
    await databasePromise(createPool(), query)
    query = `SELECT * FROM Product WHERE ProductID = '${productID}'`
    const product = await databasePromise(createPool(), query)
    return res.status(200).json({
        success: true, 
        product: product
    })
})

const deleteProduct = asyncWrapper(async(req, res, next) => {
    const productID = req.body.productID
    if(!productID) {
        next(createCustomError('Product ID Needed', 400))
    }
    let query = `DELETE FROM Product WHERE ProductID = '${productID}'`
    await databasePromise(createPool(), query)
    return res.status(200).json({
        success: true
    })
})

module.exports = {
    getAllProducts, 
    getProduct, 
    createProduct, 
    updatePorduct, 
    deleteProduct
}