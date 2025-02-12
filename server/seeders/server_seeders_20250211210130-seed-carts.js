'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id from users;`
    );

    const userRows = users[0];

    await queryInterface.bulkInsert('carts', [
      {
        userId: userRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carts', null, {});
  },
};