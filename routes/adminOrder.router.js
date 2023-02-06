const express = require('express');
const router = express.Router();

const { userMiddleware } = require('../middlewares/auth-middleware');
const AdminOrderController = require('../controller/adminOrder.controller');
const adminOrderController = new AdminOrderController();

router.get('/', userMiddleware, adminOrderController.findAdminOrder);
router.put('/', userMiddleware, adminOrderController.adminOrderStatus);

module.exports = router;
