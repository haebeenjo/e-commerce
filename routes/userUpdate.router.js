// routes/userUpdate.router.js
const express = require('express');
const router = express.Router();

const { userMiddleware } = require('../middlewares/auth-middleware');
const UserUpdateController = require('../controller/userUpdate.controller');

const userUpdateController = new UserUpdateController();

router.put('/', userMiddleware, userUpdateController.putUserUpdate);

module.exports = router;
