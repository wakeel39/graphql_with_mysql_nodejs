'use strict';
module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define('authors', {
    timestamps: false,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {});
  authors.associate = function(models) {
    // associations can be defined here
  };
  return authors;
};