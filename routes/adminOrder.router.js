const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");
const AdminOrderController = require("../controller/adminOrder.controller");
const adminOrderController = new AdminOrderController();

router.get("/", authMiddleware, adminOrderController.findAdminOrder);
router.put("/", authMiddleware, adminOrderController.adminOrderStatus);

module.exports = router;
