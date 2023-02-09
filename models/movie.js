"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasMany(models.Actor);
      Movie.belongsTo(models.Author);
      // define association here
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      synopsis: DataTypes.TEXT,
      trailerUrl: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      genre: DataTypes.STRING,
      AuthorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Authors",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
