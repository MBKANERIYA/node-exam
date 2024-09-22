const { categorySchema } = require("../models")

module.exports.Create = (body) => {
    return categorySchema.create(body)
}

module.exports.findAllCategories = () => {
    return categorySchema.find()
}

module.exports.findByIdAndDelete = (id) => {
    return categorySchema.findByIdAndDelete(id)
}

module.exports.findByIdAndUpdate = (body, id) => {
    return categorySchema.findByIdAndUpdate(body, id)
}

module.exports.findByCategoryName = (categoryName) => {
    return categorySchema.findOne({ categoryName })
}
module.exports.findById = (id) => {
    return categorySchema.findOne({id})
}
