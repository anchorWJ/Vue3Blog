const { Model, DataTypes } = require("sequelize")
const moment = require('moment');

class Article extends Model {}

module.exports = sequelize => {
  Article.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Title"
      },
      synopsis: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "Introduce"
      },
      type: {
        type: DataTypes.ENUM,
        values: ["Swift", "AWS", "Vue", "Kotlin", "Python", "Others"],
        allowNull: false,
        comment: "categories[Swift, AWS, Vue, Kotlin, Python, Others]"
      },
      content: {
        type: DataTypes.TEXT("MEDIUM"),
        allowNull: false,
        comment: "Detail"
      },
      createdAt: {
      type: DataTypes.STRING,
      defaultValue() {
        return moment().format("YYYY-MM-DD HH:mm")
      }
    }
  },
  {
    sequelize,
    timestamps: false
  })
  return  Article
}
