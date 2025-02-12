'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        name: 'Art Piece 1',
        price: 100,
        category: 'Painting',
        imageUrl: '/path/to/image1.jpg',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Art Piece 2',
        price: 200,
        category: 'Sculpture',
        imageUrl: '/path/to/image2.jpg',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Art Piece 3',
        price: 300,
        category: 'Photography',
        imageUrl: '/path/to/image3.jpg',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items', null, {});
  },
};