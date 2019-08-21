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
const productsController = require('./constrollers/products_controller')
const userController = require('./controllers/user_controller')

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))
app.use(cors())

//Routes

//Database
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost:27017/mern-ecommerce', {useNewUrlParser : true}, () => {
    console.log(`Db...dB Connected!`)
})

//Error Handling

app.use((req, res, err, next) => {
    console.log(err)
    return res.send({'Database Error' : err.message})
})

//
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
