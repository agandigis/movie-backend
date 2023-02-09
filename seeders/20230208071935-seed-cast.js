"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const actors = require("../dummy-data.json").actors;

    actors.forEach((actors) => {
      delete actors.id;

      actors.createdAt = new Date();
      actors.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Actors", actors, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Actors", null, {});
  },
};
