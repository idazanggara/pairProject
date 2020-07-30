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
    const objData =
      [
        {
          name: 'Kopi Indocafe',
          stock: 10,
          price: 3000,
          path: '/img/kopi.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gulaku',
          stock: 25,
          price: 10000,
          path: '/img/gulaku.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tepung Beras',
          stock: 30,
          price: 4000,
          path: '/img/tepungberas.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Gandum Segitiga Biru',
          stock: 50,
          price: 35000,
          path: '/img/gandumsegitigabiru.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Minyak Bimoli',
          stock: 99,
          price: 10500,
          path: '/img/minyakbimoli.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Masako',
          stock: 100,
          price: 9000,
          path: '/img/masako.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Beras Maknyus',
          stock: 75,
          price: 14000,
          path: '/img/berasmaknyus.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kacang Dua Kelinci',
          stock: 25,
          price: 7000,
          path: '/img/kacangkelinci.jpg',
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
