const Product = require('../models/product')
const User = require('../models/user')

module.exports = {
    //Get all Admin Users
    getAdminUsers(req, res, next) {
        User.find((err, users) => {
            if (err) {
                res.status(500)
                return next(err)
            } else {
                console.log(users)
                return res.status(200).send(users)
            }
        })
    },

    //Create Product
    createProduct(req, res, next) {
        const { name, description, price } = req.body
        let newProduct = new Product({
            name,
            description,
            price
        })
        newProduct.save((err, product) => {
            if(err){
                res.status(500)
                return next(err)
            } else {
                return res.status(201).send(product)
            }
        })
    },

    //Update Product
    // updateProduct(req, res, next) {
    //     const { id } = req.params
    //     Product.findById(id).exec((err, updatedProduct) => {
    //         if(err){
    //             res.status(500)
    //             return next(err)
    //         } else {
    //             updatedProduct.name = name
    //             updatedProduct.description = description
    //             updatedProduct.price = price
    //             return res.status(202).send(updatedProduct)
    //         }
    //     })
    // },

    updateProduct(req, res, next) {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, update) => {
            if(err){
                res.status(500)
                return next(err)
            } else {
                return res.status(202).send(update)
            }
        })
    },

    //Delete Product
    deleteProduct(req, res, next) {
        const { id } = req.params
        Product.findOneAndDelete({_id : id}).exec((err, deleted) => {
            if(err){
                res.status(500)
                return next(err)
            } else {
                return res.status(202).send(deleted)
            }
        })
    }
}
