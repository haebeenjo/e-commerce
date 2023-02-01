'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Carts', 'item_id', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addConstraint('Carts', {
      fields: ['item_id'],
      type: 'foreign key',
      name: 'Carts_item_id_fk',
      references: {
        table: 'Items',
        field: 'itemId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addColumn('Carts', 'user_id', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addConstraint('Carts', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'Carts_user_id_fk',
      references: {
        table: 'Users',
        field: 'userId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addColumn('Orders', 'item_id', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addConstraint('Orders', {
      fields: ['item_id'],
      type: 'foreign key',
      name: 'Orders_item_id_fk',
      references: {
        table: 'Items',
        field: 'itemId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addColumn('Orders', 'user_id', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addConstraint('Orders', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'Orders_user_id_fk',
      references: {
        table: 'Users',
        field: 'userId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addColumn('Items', 'category_id', {
      type: Sequelize.BIGINT,
    });
    await queryInterface.addConstraint('Items', {
      fields: ['category_id'],
      type: 'foreign key',
      name: 'Items_category_id_fk',
      references: {
        table: 'Categories',
        field: 'categoryId',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Carts', 'user_id');
    await queryInterface.removeColumn('Carts', 'item_id');
    await queryInterface.removeColumn('Orders', 'user_id');
    await queryInterface.removeColumn('Orders', 'item_id');
    await queryInterface.removeColumn('Items', 'category_id');
  }
};
