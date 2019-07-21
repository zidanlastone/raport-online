'use strict';
module.exports = (sequelize, DataTypes) => {
  const subjects = sequelize.define('subjects', {
    subjectName: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {});
  subjects.associate = function(models) {
    // associations can be defined here
  };
  return subjects;
};