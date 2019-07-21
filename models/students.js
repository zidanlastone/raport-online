'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    nis: DataTypes.INTEGER,
    nins: DataTypes.INTEGER,
    name: DataTypes.STRING,
    birthLocation: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: DataTypes.STRING,
    religion: DataTypes.STRING,
    address: DataTypes.TEXT,
    dateOfEntry: DataTypes.DATE,
    outDate: DataTypes.DATE,
    image: DataTypes.STRING
  }, {});
  students.associate = function(models) {
    // associations can be defined here
  };
  return students;
};