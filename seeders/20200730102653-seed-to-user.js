'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
          username: 'admin',
          password: 'admin',
          email: 'admin@gmail.com',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'develop',
          password: 'develop',
          email: 'develop@gmail.com',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    return queryInterface.bulkInsert('Users', objData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Users', null, {});
  }
};
