let mongoose = require("mongoose")

let adminSchema = new mongoose.Schema({
    email: {},
    password:{}
})
let admin = mongoose.model("adminSchema", adminSchema)

module.exports = admin