// routes/userUpdate.router.js
const express = require("express");
const router = express.Router();



const authMiddleware = require('../middlewares/auth-middleware');
const UserUpdateController = require('../controller/userUpdate.controller');
const userUpdateController = new UserUpdateController();

router.put('/:userId',  userUpdateController.putUserUpdate);//authMiddleware,

module.exports = router;