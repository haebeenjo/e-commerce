'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      itemId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      item_name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.BIGINT
      },
      detail: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      item_status: {
        type: Sequelize.STRING
      },
      office: {
        type: Sequelize.BOOLEAN
      },
      design: {
        type: Sequelize.BOOLEAN
      },
      developer: {
        type: Sequelize.BOOLEAN
      },
      music: {
        type: Sequelize.BOOLEAN
      },
      sports: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};