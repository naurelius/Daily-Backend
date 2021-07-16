'use strict';

const {createFalse} = require("typescript");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Todos', [{
      todo: 'Eat',
      done: false,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      todo: 'Sleep',
      done: true,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },{ 
      todo: 'code',
      done: false,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
