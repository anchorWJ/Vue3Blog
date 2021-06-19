const Joi = require("joi");
const typeList = ["Swift", "Flutter", "Python", "Go", "AWS", "Architecture", "Others"];

exports.schema = {

  index: Joi.object({
    limit: Joi.number()
      .min(0)
      // change me => add a pagination function
      .default(30)
      .error(Error("query-limit must be number, and min must be 0")),
    page: Joi.number()
      .min(1)
      .default(1)
      .error(Error("query-page must be number, and min must be 1")),
    type: Joi.array()
      .empty("")
      .items(Joi.valid("Swift", "AWS", "Vue", "Kotlin", "Python", "Others"))
      .single()   // string to array
      .default(["Swift", "AWS", "Vue", "Kotlin", "Python", "Others"])
      .error(Error("query-type must be string, and must belong Swift, AWS, Vue, Kotlin, Python, Others"))
  }),

  show: Joi.object({
    id: Joi.number()
      .required()
      .error(Error("param-id must ber number"))
  }),

  create: Joi.object({
    title: Joi.string()
      .required()
      .error(Error("body-title must be string")),
    synopsis: Joi.string()
    // when default is (""), empty() is necessary
      .empty("")
      .default("")
      .error(Error("body-synopsis must be string")),
    type: Joi.string()
      .valid("Swift", "AWS", "Vue", "Kotlin", "Python", "Others")
      .required()
      .error(Error("body-type must belong Swift, Flutter, Go, AWS, Vue, Architecture, Python, Others")),
    content: Joi.string()
      .empty("")
      .default("")
      .error(Error("body-content must be string"))
  }),

  update: Joi.object({
    id: Joi.number()
      .required()
      .error(Error("param-id must be number")),
    title: Joi.string()
      .empty("")
      .error(Error("body-title must be string")),
    synopsis: Joi.string()
      .empty("")
      .default("")
      .error(Error("body-synopsis must be string")),
    type: Joi.string()
      .empty("")
      .valid("Swift", "AWS", "Vue", "Kotlin", "Python", "Others")
      .error(Error("body-type must belong Swift, AWS, Vue, Kotlin, Python, Others")),
    content: Joi.string()
      .empty("")
      .default("")
      .error(Error("body-content must be string"))
  }),

  destroy: Joi.object({
    id: Joi.number()
      .required()
      .error(Error("param-id must ber number"))
  })
}