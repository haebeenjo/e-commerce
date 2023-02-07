// services/adminLogin.service.js

const jwt = require("jsonwebtoken");

const AdminRepository = require("../repositories/admin.repository");
const { Admin } = require("../models");
class AdminLoginService {
  adminRepository = new AdminRepository(Admin);

  findOne = async (email, password) => {
    const findAdmin = await this.adminRepository.findOne(email, password);

    return {
      adminId: findAdmin.adminId,
    };
  };
  issueToken = async (adminId) => {
    const token = jwt.sign({ adminId: adminId }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return {
      token: token,
    };
  };
}

module.exports = AdminLoginService;
