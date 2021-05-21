/**
 * @type {Custom.Controller}
 */
module.exports = {
  async index(ctx, next) {
    ctx.body = "i am  index"
  },
  async show(ctx, next) {
    const { id } = ctx.params
    ctx.success(`i am article${id}`)
  },
  async create(ctx, next) {

  },
  async update(ctx, next) {

  },
  async destroy(ctx, next) {

  }
}