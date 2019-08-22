//Imports
require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 9000

//Controllers
const adminController = require('./controllers/admin_controller')
const cloudinaryController = require('./controllers/cloudinary_controller')
const productsController = require('./controllers/products_controller')
const userController = require('./controllers/user_controller')

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14
        }
    })
)
app.use(cors())

//Routes
setTimeout(() => {
    //User Endpoints
    // app.get('/api/user-data', userController.readUserData)
    // app.post('/api/user-data/cart', userController.addToCart)
    // app.delete('/api/user-data/cart/:id', userController.removeFromCart)
    // app.post('/api/login', userController.login)
    // app.post('/api/logout', userController.logout)

    //Product Endpoints
    app.get('/api/products', productsController.readAllProducts)
    app.get('/api/products/:id', productsController.readProduct)

    //Admin Endpoints
    app.get('/api/users', adminController.getAdminUsers)
    app.post('/api/products', adminController.createProduct)
    app.put('/api/products/:id', adminController.updateProduct)
    app.delete('/api/products/:id', adminController.deleteProduct)
}, 200)

//Database
mongoose.connect(
    'mongodb://localhost:27017/mern-ecommerce',
    { useNewUrlParser: true },
    () => {
        console.log(`Db...dB Connected!`)
    }
)

//Error Handling

app.use((req, res, err, next) => {
    console.log(err)
    return res.send({ 'Database Error': err.msg })
})

//
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
