// repositories/users.repository.js

const { Users, Sequelize } = require('../models');

class UserRepository {
  createUser = async (
    email,
    phone_number,
    hashPassword,
    name,
    address,
    point,
    blacklist
  ) => {
    const createUserData = await Users.create({
      email,
      phone_number,
      password: hashPassword,
      name,
      address,
      point,
      blacklist,
    });

    return createUserData;
  };

  findOne = async (email, hashPassword) => {
    const findUser = await Users.findOne({
      where: { email, password: hashPassword },
    });

    return findUser;
  };

  findAllUser = async (email) => {
    const users = await Users.findAll({
      where: { email },
    });
    return users;
  };

  userPointMinus = async (order_price, userId) => {
    const users = await Users.update(
      { point: Sequelize.literal(`point - ${order_price}`) },
      { where: { userId: userId } }
    );
  };
}

module.exports = UserRepository;
