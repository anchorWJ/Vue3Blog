const articles = require("../controllers/article")

/**
 * @type {Custom.IRouter}
 */
module.exports = router => {
  router.prefix("/articles")
  router.get("/", articles.index)
  router.get("/:id", articles.show)
  router.post("/", articles.create)
  router.get("/:id", articles.update)
  router.del("/:id", articles.destroy)
}