'use strict';
<<<<<<< HEAD
const { Model } = require('sequelize');
=======
const {
  Model
} = require('sequelize');
>>>>>>> a06df25fe00b32c75264b7321fb1cd58f21bc10d
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
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
  Items.init(
    {
      itemId: { primaryKey: true, type: DataTypes.BIGINT },
      item_name: DataTypes.STRING,
      price: DataTypes.BIGINT,
      detail: DataTypes.STRING,
      img: DataTypes.STRING,
      item_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Items',
    }
  );
  return Items;
};
=======
  Items.init({
    itemId: {primaryKey:true, type:DataTypes.BIGINT},
    item_name: DataTypes.STRING,
    price: DataTypes.BIGINT,
    detail: DataTypes.string
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};
>>>>>>> a06df25fe00b32c75264b7321fb1cd58f21bc10d
