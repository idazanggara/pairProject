'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let objData =
      [
        {
          name: 'Kopi Kapal Api',
          stock: 10,
          price: 3000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Apel',
          stock: 25,
          price: 10000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tepung Kue',
          stock: 30,
          price: 4000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gandum Segitiga Biru',
          stock: 50,
          price: 35000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Minyak Bimoli',
          stock: 99,
          price: 10500,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jeruk',
          stock: 100,
          price: 9000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Beras Sumo',
          stock: 75,
          price: 14000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kacang Dua Kelinci',
          stock: 25,
          price: 7000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
      return queryInterface.bulkInsert('Items',objData, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Items', null, {});
  }
};
