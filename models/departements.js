'use strict';
module.exports = (sequelize, DataTypes) => {
  const departements = sequelize.define('departements', {
    departementName: DataTypes.STRING
  }, {});
  departements.associate = function(models) {
    // associations can be defined here
  };
  return departements;
};