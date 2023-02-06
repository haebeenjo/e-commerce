'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Orders.belongsTo(models.Users, { foreignKey: 'user_id' });
      models.Orders.belongsTo(models.Items, { foreignKey: 'item_id' });
    }
  }
  Orders.init(
    {
      orderId: { primaryKey: true, type: DataTypes.BIGINT },
      status: { type: DataTypes.STRING, defaultValue: '결제 완료' },
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      order_price: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};
