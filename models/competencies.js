'use strict';
module.exports = (sequelize, DataTypes) => {
  const competencies = sequelize.define('competencies', {
    subjectId: DataTypes.INTEGER,
    competencyName: DataTypes.STRING,
    semester: DataTypes.INTEGER,
    kkm: DataTypes.INTEGER
  }, {});
  competencies.associate = function(models) {
    competencies.belongsTo(models.subjects)
  };
  return competencies;
};