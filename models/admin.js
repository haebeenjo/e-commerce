'use strict';
<<<<<<< HEAD
const { Model } = require('sequelize');
=======
const {
  Model
} = require('sequelize');
>>>>>>> a06df25fe00b32c75264b7321fb1cd58f21bc10d
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
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
  Admin.init(
    {
      adminId: { primaryKey: true, type: DataTypes.BIGINT },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Admin',
    }
  );
  return Admin;
};
=======
  Admin.init({
    adminId: {primaryKey:true, type:DataTypes.BIGINT},
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};
>>>>>>> a06df25fe00b32c75264b7321fb1cd58f21bc10d
