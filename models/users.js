'use strict';
<<<<<<< HEAD
const { Model } = require('sequelize');
=======
const {
  Model
} = require('sequelize');
>>>>>>> a06df25fe00b32c75264b7321fb1cd58f21bc10d
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
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
  Users.init(
    {
      userId: { primaryKey: true, type: DataTypes.BIGINT },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      point: DataTypes.BIGINT,
      blacklist: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
=======
  Users.init({
    userId:{primaryKey:true, type:DataTypes.BIGINT},
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    adress: DataTypes.STRING,
    point: DataTypes.INTEGER,
    blacklist: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
>>>>>>> a06df25fe00b32c75264b7321fb1cd58f21bc10d
