'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Carts.belongsTo(models.Users, { foreignKey: "user_id" });
      models.Carts.belongsTo(models.Items, { foreignKey: "item_id" });
    }
  }
  Carts.init({
    cartId: {primaryKey:true, type:DataTypes.BIGINT}
  }, {
    sequelize,
    modelName: 'Carts',
  });
  return Carts;
};
