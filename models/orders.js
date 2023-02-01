'use strict';
<<<<<<< HEAD
const { Model } = require('sequelize');
=======
const {
  Model
} = require('sequelize');
>>>>>>> a06df25fe00b32c75264b7321fb1cd58f21bc10d
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
<<<<<<< HEAD
  Orders.init(
    {
      orderId: { primaryKey: true, type: DataTypes.BIGINT },
      status: DataTypes.STRING,
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};
=======
  Orders.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
>>>>>>> a06df25fe00b32c75264b7321fb1cd58f21bc10d
