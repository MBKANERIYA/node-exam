let mongoose = require("mongoose")

let productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema"
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategorySchema"
    },
    productName: {},
    desc: {},
    price: {},
    quantity: {},
    productImage: {}
})

let product = mongoose.model("productSchema", productSchema)

module.exports = product