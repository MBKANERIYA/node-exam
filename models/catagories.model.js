let mongoose = require("mongoose")

let categorySchema = new mongoose.Schema({
    categoryName: {}
})
let category = mongoose.model("categorySchema", categorySchema)

module.exports = category