const Product = require('../models/product')

module.exports = {
    //Read all Products
    readAllProducts(req, res, next) {
        Product.find({}).exec((err, products) => {
            if (err) {
                res.status(500)
                return next(err)
            } else {
                return res.status(200).send(products)
            }
        })
    },
    //Read Specific Product
    readProduct(req,res,next) {
        const { id } = req.params
        Product.findById(id).exec((err, product) => {
            if(err) {
                res.status(500)
                return next(err)
            } else {
                return res.status(200).send(product)
            }
        })
    }
}
