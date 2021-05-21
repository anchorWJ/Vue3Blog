const user = require("../controllers/user.js")

/**
 * @type {Custom.IRouter}
 */
module.exports = router => {
  router.prefix("/users")
  router.post("/login", user.login)
}