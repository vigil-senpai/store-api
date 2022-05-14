const express = require('express')
const notFound = require('./middleware/not-found')
const app = express()
require('dotenv').config()

const productsRouter = require('./routes/products')

const port = process.env.PORT || 8000

app.use(express.json())

app.use('/api/v1/products', productsRouter)

app.use(notFound)

app.listen(port, () => {
    console.log(`[+] Server Listening on Port ${port}`)
})