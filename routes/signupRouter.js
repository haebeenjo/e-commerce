// routes/signupRouter.js

const express = require("express");
const router = express.Router();

const SignupController = require('../controller/signupController');
const signupController = new SignupController();

router.post('/', signupController.postSignup);


module.exports = router;