const config = {}

config.PORT = 3000

/**
 * @type {import("sequelize").Options}
 */
config.MODEL = {
  dialect: "mysql",
  port: 3306,
  database: "vue-blog",
  username: "root",
  password: "0924",
  host: "vue-blog.cisb4qsld0g5.ap-northeast-1.rds.amazonaws.com",
  dialectOptions: {
    ssl: "Amazon RDS"
  },
  pool: {
    max: 100,
    min: 0,
    acquire: 100*1000,
  }
}

config.SECRET_KEY = {
  PASSWORD: "QAZWSX!@#$%^123456",
  TOKEN: "QWERTYUIOP!@#$%^&*()_+"
}

module.exports = config