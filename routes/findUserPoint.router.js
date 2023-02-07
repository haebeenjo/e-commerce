const express = require('express');
const router = express.Router();
const FindUserPointController = require('../controller/findUserPoint.controller');
const { userMiddleware } = require('../middlewares/auth-middleware');
const findUserPointController = new FindUserPointController();

router.get('/', userMiddleware, findUserPointController.findUserPoint);

module.exports = router;
