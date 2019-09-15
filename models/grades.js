"use strict";
module.exports = (sequelize, DataTypes) => {
  const grades = sequelize.define(
    "grades",
    {
      gradeName: DataTypes.STRING,
      departementId: DataTypes.INTEGER,
      homeroomTeacherId: DataTypes.INTEGER,
      yearOfEntry: DataTypes.DATE,
      outYear: DataTypes.DATE
    },
    {}
  );
  grades.associate = function(models) {
    grades.belongsToMany(models.students, {
      through: "students_at_grade",
      as: "students",
      foreignKey: "gradeId",
      targetKey: "id"
    });
    grades.belongsTo(models.departements, {
      foreignKey: "departementId",
      targetKey: "id"
    });
    grades.belongsTo(models.teachers, {
      foreignKey: "homeroomTeacherId",
      targetKey: "id"
    });
  };
  return grades;
};
