/**
 * @type {Custom.IMiddlewareHandler<{bar: number}>}
 */

const errorHandler = (options = {}) => {
  return async(ctx, next) => {
    try {
      await next()
      const { body, status } = ctx
      const isNotFound = status === 404 && !body
      if(isNotFound) {
        ctx.success("resource was not found", status)
      }
    } catch(error) {
      const { status, message } = error

      const isProd = ctx.app.env === "production"
      const isSeverError = status === 500
      const isProdServerError = isProd && isSeverError

      if (isProdServerError) {
        message = "Server Error"
      }
      ctx.fail(message, status)
      ctx.app.emit("error", { message, status })
    }
  }
}

module.exports = errorHandler