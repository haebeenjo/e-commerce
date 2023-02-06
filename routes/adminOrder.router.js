const express = require("express");
const router = express.Router();

const { adminMiddleware } = require('../middlewares/auth-middleware');
const AdminOrderController = require("../controller/adminOrder.controller");
const adminOrderController = new AdminOrderController();

router.get("/", adminMiddleware, adminOrderController.findAdminOrder);
router.put("/", adminMiddleware, adminOrderController.adminOrderStatus);

module.exports = router;
