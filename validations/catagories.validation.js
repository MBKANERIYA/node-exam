let joi = require("joi")

module.exports.category = {
    body: joi.object().keys({
        categoryName: joi.string().required()
    })
}