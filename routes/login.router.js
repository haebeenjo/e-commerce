const express = require('express');
const router = express.Router();

const LoginController = require('../controller/login.controller');
const loginController = new LoginController();

router.post('/', loginController.postLogin);

module.exports = router;
