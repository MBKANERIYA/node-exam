let joi = require("joi")

let subcategory = {
    body: joi.object().keys({
        subcategory: joi.string().required(),
        category: joi.string().required()
    })
}

module.exports = subcategory