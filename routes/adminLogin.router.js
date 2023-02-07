const express = require("express");
const router = express.Router();

const AdminLoginController = require("../controller/adminLogin.controller");
const adminLoginController = new AdminLoginController();

router.post("/", adminLoginController.postLogin);

module.exports = router;
