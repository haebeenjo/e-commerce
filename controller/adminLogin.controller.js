// controllers/adminLogin.controller.js
const AdminLoginService = require("../services/adminLogin.service");

class AdminLoginController {
  adminLoginService = new AdminLoginService();

  postLogin = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const adminId = await this.adminLoginService.findOne(email, password);

      const token = await this.adminLoginService.issueToken(adminId);
      res.cookie("token", token["token"]);
      res.status(200).json({
        result: "success",
        token: token,
        adminId: adminId,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = AdminLoginController;
