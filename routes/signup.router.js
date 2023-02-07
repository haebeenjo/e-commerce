const express = require('express');
const router = express.Router();

const SignupController = require('../controller/signup.controller');
const signupController = new SignupController();

router.post('/', signupController.postSignup);

module.exports = router;
