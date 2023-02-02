const express = require('express');
const UserOrderController = require('../controller/userOrder.controller');
const router = express.Router();

const userOrderController = new UserOrderController();

router.post('/', userOrderController.createOrder);
router.get('/', userOrderController.findOrder);

module.exports = router;
