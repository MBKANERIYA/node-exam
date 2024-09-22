let joi = require("joi")

module.exports.admin = {
    body: joi.object().keys({
        email: joi.string().required().trim(),
        password: joi.string().required().trim(),
    })
}