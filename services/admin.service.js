const { adminSchema } = require("../models")

module.exports.adminCreate = (body) => {
    return adminSchema.create(body)
}

module.exports.findAllAdmin = () => {
    return adminSchema.find()
}

module.exports.findByIdAndDelete = (id) => {
    return adminSchema.findByIdAndDelete(id)
}

module.exports.findByIdAndUpdate = (body, id) => {
    return adminSchema.findByIdAndUpdate(body, id)
}

module.exports.findByemail = (email) => {
    return adminSchema.findOne({ email })
}

