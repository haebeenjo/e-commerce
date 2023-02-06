'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      itemId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      item_name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.BIGINT,
      },
      detail: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.STRING,
      },
      item_status: {
        type: Sequelize.STRING,
        defaultValue: '판매 중',
      },
      office: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      design: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      developer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      music: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      sports: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  },
};
