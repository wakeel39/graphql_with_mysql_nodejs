'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    author_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  posts.associate = function(models) {
    // associations can be defined here
    // posts.belongsTo(models.authors, {
    //     foreignKey: 'author_id',
    //     as: 'authorDetails'
    //   });
  };
  return posts;
};