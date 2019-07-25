'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [
      {
        nis: '10000001',
        nisn: '100000011',
        name: 'John Doe',
        birthLocation:'Bogor',
        birthDate: '2001-02-2',
        gender:'Male',
        religion:'Islam',
        address:'somewhere',
        dateOfEntry: '2017-06-15'
      },
      {
        nis: '10000002',
        nisn: '100000012',
        name: 'John New',
        birthLocation:'Jakarta',
        birthDate: '2001-05-22',
        gender:'Male',
        religion:'Islam',
        address:'somewhere',
        dateOfEntry: '2017-06-15'
      },
      {
        nis: '10000003',
        nisn: '100000013',
        name: 'John Doe',
        birthLocation:'Bandung',
        birthDate: '2001-07-1',
        gender:'Male',
        religion:'Islam',
        address:'somewhere',
        dateOfEntry: '2017-06-15'
      },
      {
        nis: '10000004',
        nisn: '100000014',
        name: 'Zidan',
        birthLocation:'Bogor',
        birthDate: '2001-06-24',
        gender:'Male',
        religion:'Islam',
        address:'somewhere',
        dateOfEntry: '2017-06-15'
      } 
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('students', null, {});
  }
};
