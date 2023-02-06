const express = require('express');
const UserOrderController = require('../controller/userOrder.controller');
const router = express.Router();
const { userMiddleware } = require('../middlewares/auth-middleware');
const userOrderController = new UserOrderController();

router.post('/', userMiddleware, userOrderController.createOrder);
router.get('/', userMiddleware, userOrderController.findOrder);

module.exports = router;
