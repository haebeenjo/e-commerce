// repositories/admin.repository.js

const { Admin } = require("../models");

class AdminRepository {
  createAdmin = async (
    email,
    password
  ) => {
    const createAdminData = await Admin.create({
      email,
      password
    });

    return createAdminData;
  };

  findOne = async (email, password) => {
    const findAdmin = await Admin.findOne({
      where: { email, password },
    });

    return findAdmin;
  };

  findAllAdmin = async (email) => {
    const admin = await Admin.findAll({
      where: { email },
    });
    return admin;
  };
}

module.exports = AdminRepository;
