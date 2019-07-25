'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('departements', [
        {
         departementName: 'Rekayasa Perangkat Lunak',
        },
        {
          departementName: 'Teknik Komputer dan Jaringan',
        },
        {
          departementName: 'Teknik Kendaraan Ringan',
        },
        {
          departementName: 'Teknik Fabrikasi Logam',
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('departements', null, {});
  }
};
