'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('grades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gradeName: {
        type: Sequelize.STRING
      },
      departementId: {
        type: Sequelize.INTEGER
      },
      homeroomTeacherId: {
        type: Sequelize.INTEGER
      },
      yearOfEntry: {
        type: Sequelize.DATE
      },
      outYear: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('grades');
  }
};