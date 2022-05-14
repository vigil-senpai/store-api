const express = require('express')
const { getAllProducts, getProduct } = require('../controllers/products')

const router = express.Router()

router.get('/', getAllProducts)

router.get('/:ID', getProduct)

module.exports = router