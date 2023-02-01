'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Categorys.init(
    {
      categoryId: { primaryKey: true, type: DataTypes.BIGINT },
      office: DataTypes.BOOLEAN,
      design: DataTypes.BOOLEAN,
      developer: DataTypes.BOOLEAN,
      music: DataTypes.BOOLEAN,
      sports: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Categorys',
    }
  );
  return Categorys;
};
