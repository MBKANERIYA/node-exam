const { productSchema } = require("../models")

module.exports.Create = (body) => {
    return productSchema.create(body)
}

module.exports.getAllProducts = () => {
    return productSchema.find().populate("category", "categoryName").populate("subcategory", "subcategory")
}

module.exports.findByIdAndDelete = (id) => {
    return productSchema.findByIdAndDelete(id)
}

module.exports.findByIdAndUpdate = (body, id) => {
    return productSchema.findByIdAndUpdate(body, id)
}

module.exports.findByProductName = (productName) => {
    return productSchema.findOne({ productName })
}

