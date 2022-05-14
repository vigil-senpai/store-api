const express = require('express')
const app = express()
require('dotenv').config()

const productsRouter = require('./routes/products')
const notFound = require('./middleware/not-found')
const customErrorHandler = require('./middleware/custom-error-handler')
const connectDatabase = require('./database/connect')

const port = process.env.PORT || 8000

app.use(express.json())

app.use('/api/v1/products', productsRouter)

app.use(notFound)
app.use(customErrorHandler)

app.listen(port, async () => {
    try {
        await connectDatabase()
        console.log('[+] Connection Success')
        console.log(`[+] Server Listening on Port ${port}`)
    }
    catch (error) {
        console.log('[-] Connection Failed')
    }
})