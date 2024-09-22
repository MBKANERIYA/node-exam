const { subcategorySchema } = require("../models")
const { category } = require("../validations/catagories.validation")

module.exports.Create = (body) => {
    return subcategorySchema.create(body)
}

module.exports.getAllSubcategory = () => {
    return subcategorySchema.find().populate("category", "categoryName")
}

module.exports.findByIdAndDelete = (id) => {
    return subcategorySchema.findByIdAndDelete(id)
}

module.exports.findByIdAndUpdate = (body, id) => {
    return subcategorySchema.findByIdAndUpdate(body, id)
}

module.exports.findBySubcategory = (subcategory) => {
    return subcategorySchema.findOne({ subcategory })
}