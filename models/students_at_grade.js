'use strict';
module.exports = (sequelize, DataTypes) => {
  const students_at_grade = sequelize.define('students_at_grade', {
    gradeId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {});
  students_at_grade.associate = function(models) {
    // associations can be defined here
  };
  return students_at_grade;
};