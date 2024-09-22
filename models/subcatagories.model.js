let mongoose = require("mongoose")

let subcategorySchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema"
    },
    subcategory: {}
})

let subcategory = mongoose.model("subcategorySchema", subcategorySchema)

module.exports = subcategory