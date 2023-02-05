// routes/userUpdateRourer.js
const express = require("express");
const router = express.Router();



const authMiddleware = require('../middlewares/auth-middleware');
const UserUpdateController = require('../controller/userUpdateController');
const userUpdateController = new UserUpdateController();

router.put('/:userId', authMiddleware, userUpdateController.putUserUpdate);

module.exports = router;