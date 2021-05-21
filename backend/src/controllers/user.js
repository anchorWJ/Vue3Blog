const Joi = require("joi")
const { schema } = require("../pipe/user.js")
/**
 * @type {Custom.Controller<"login">}
 */
module.exports = {
  async login(ctx, next) {
    const res = await schema.login.validateAsync(ctx.request.body)
    ctx.success(res)
  }
}