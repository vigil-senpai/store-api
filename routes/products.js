const express = require('express')
const { getAllProducts, getProduct, createProduct } = require('../controllers/products')

const router = express.Router()

router.get('/', getAllProducts)

router.get('/:ID', getProduct)

router.post('/', createProduct)

module.exports = router