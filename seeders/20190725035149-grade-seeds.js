'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('grades', [
        {
          gradeName: 'X-RPL-1',
          departementId: '1',
          homeroomTeacherId:'1',
          yearOfEntry:'2019',
          outYear: '2020'        
        },
        {
          gradeName: 'X-RPL-2',
          departementId: '2',
          homeroomTeacherId:'2',
          yearOfEntry:'2019',
          outYear: '2020'        
        },
        {
          gradeName: 'X-TKJ-1',
          departementId: '2',
          homeroomTeacherId:'3',
          yearOfEntry:'2019',
          outYear: '2020'        
        },
        {
          gradeName: 'X-TKJ-2',
          departementId: '2',
          homeroomTeacherId:'4',
          yearOfEntry:'2019',
          outYear: '2020'        
        },
        {
          gradeName: 'X-TKR-1',
          departementId: '3',
          homeroomTeacherId:'5',
          yearOfEntry:'2019',
          outYear: '2020'        
        },
        {
          gradeName: 'X-TKR-2',
          departementId: '3',
          homeroomTeacherId:'6',
          yearOfEntry:'2019',
          outYear: '2020'        
        },
        {
          gradeName: 'X-TKR-3',
          departementId: '3',
          homeroomTeacherId:'7',
          yearOfEntry:'2019',
          outYear: '2020'        
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('grades', null, {});
  }
};
