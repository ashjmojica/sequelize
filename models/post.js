"use strict";
const { Model } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = (DataTypes, sequelize) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, { foreignkey: "userId" });
    }
  }

  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    { sequelize, modelCalled: "Post" }
  );

  return Post;
};
