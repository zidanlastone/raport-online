'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('teachers', [
        {
          nip: '1000000001',
          teacherName: 'Novita Wandasari'
        },
        {
          nip: '1000000002',
          teacherName: 'Ajeng Astri Utami'
        },
        {
          nip: '1000000003',
          teacherName: 'Mulyadih'
        },
        {
          nip: '1000000004',
          teacherName: 'Sri Esti Hariati'
        },
        {
          nip: '1000000005',
          teacherName: 'Jajang'
        },
        {
          nip: '1000000006',
          teacherName: 'Ruri'
        },
        {
          nip: '1000000007',
          teacherName: 'Hajah Nuraeni'
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('teachers', null, {});
  }
};
