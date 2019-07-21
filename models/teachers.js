'use strict';
module.exports = (sequelize, DataTypes) => {
  const teachers = sequelize.define('teachers', {
    nip: DataTypes.INTEGER,
    teacherName: DataTypes.STRING
  }, {});
  teachers.associate = function(models) {
    // associations can be defined here
  };
  return teachers;
};