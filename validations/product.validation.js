let joi = require("joi")

let product = {
    body: joi.object().keys({
        category: joi.string().required(),
        subcategory: joi.string().required(),
        productName: joi.string().required(),
        desc: joi.string().required(),
        price: joi.number().required(),
        quantity: joi.number().required(),
        productImage: joi.string().optional(),
    })
}

module.exports = product