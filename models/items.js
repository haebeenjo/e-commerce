'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Items.hasMany(models.Carts, { foreignKey: "item_id" });
      models.Items.hasMany(models.Orders, { foreignKey: "item_id" });
    }
  }
  Items.init({
    itemId: {primaryKey:true, type:DataTypes.BIGINT},
    item_name: DataTypes.STRING,
    price: DataTypes.BIGINT,
    detail: DataTypes.STRING,
    img: DataTypes.STRING,
    item_status: DataTypes.STRING,
    office: DataTypes.BOOLEAN,
    design: DataTypes.BOOLEAN,
    developer: DataTypes.BOOLEAN,
    music: DataTypes.BOOLEAN,
    sports: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};
