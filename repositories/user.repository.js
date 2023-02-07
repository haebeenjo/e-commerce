// repositories/user.repository.js
class UserRepository {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }

  createUser = async (
    email,
    phone_number,
    hashPassword,
    name,
    address,
    point,
    blacklist
  ) => {
    const createUserData = await this.UserModel.create({
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
    const findUser = await this.UserModel.findOne({
      where: { email, password: hashPassword },
    });

    return findUser;
  };

  findAllUser = async (email) => {
    const users = await this.UserModel.findAll({
      where: { email },
    });
    return users;
  };
  userPointMinus = async (order_price, userId) => {
    const user = await this.UserModel.findByPk(userId);
    const users = await this.UserModel.update(
      { point: user.point - order_price },
      { where: { userId: userId } }
    );
  };

  // adminLogin = async (email, password) => {
  //   const adminLogin = await this.AdminModel.findOne({
  //     where: { email, password },
  //   });

  //   return adminLogin;
  // };
}

module.exports = UserRepository;
