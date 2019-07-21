'use strict';
module.exports = (sequelize, DataTypes) => {
  const scores = sequelize.define('scores', {
    studentId: DataTypes.INTEGER,
    competencyId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  scores.associate = function(models) {
    // associations can be defined here
  };
  return scores;
};