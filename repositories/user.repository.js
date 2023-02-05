// repositories/users.repository.js

const { Users } = require("../models");

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
}

module.exports = UserRepository;
