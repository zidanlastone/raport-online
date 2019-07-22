'use strict';
module.exports = (sequelize, DataTypes) => {
  const students_at_grade = sequelize.define('students_at_grade', {
    gradeId:{
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'grades',
        key:'id'
      }
    },
    studentId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'students',
        key:'id'
      }
    }
  }, {});
  students_at_grade.associate = function(models) {
    // associations can be defined here
  };
  return students_at_grade;
};