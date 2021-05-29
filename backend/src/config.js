const config = {}

config.PORT = 3000

/**
 * @type {import("sequelize").Options}
 */
config.MODEL = {
  dialect: "mysql",
  database: "vue-blog",
  username: "root",
  password: "0924",
  host: "mysql",
  timezone: "+09:00",
  logging: false
}

config.SECRET_KEY = {
  PASSWORD: "QAZWSX!@#$%^123456",
  TOKEN: "QWERTYUIOP!@#$%^&*()_+"
}

module.exports = config