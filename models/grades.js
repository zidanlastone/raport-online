'use strict';
module.exports = (sequelize, DataTypes) => {
  const grades = sequelize.define('grades', {
    gradeName: DataTypes.STRING,
    departementId: DataTypes.INTEGER,
    homeroomTeacherId: DataTypes.INTEGER,
    yearOfEntry: DataTypes.DATE,
    outYear: DataTypes.DATE
  }, {});
  grades.associate = function(models) {
    // associations can be defined here
  };
  return grades;
};