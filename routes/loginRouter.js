// routes/loginRouter.js

const express = require("express");
const router = express.Router();

const LoginController = require('../controller/loginController');
const loginController = new LoginController();

router.post('/', loginController.postLogin);

module.exports = router;