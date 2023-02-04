const express = require('express');
const UserOrderController = require('../controller/userOrder.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const userOrderController = new UserOrderController();

router.post('/', authMiddleware, userOrderController.createOrder);
router.get('/', authMiddleware, userOrderController.findOrder);

module.exports = router;
