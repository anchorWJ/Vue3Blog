const Joi = require("joi")

exports.schema = {
  login: Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(3).required()
  })
}