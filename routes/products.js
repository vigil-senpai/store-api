const express = require('express')
const { getAllProducts, getProduct, createProduct, updatePorduct } = require('../controllers/products')

const router = express.Router()

router.get('/', getAllProducts)

router.get('/:ID', getProduct)

router.post('/', createProduct)

router.patch('/', updatePorduct)

module.exports = router