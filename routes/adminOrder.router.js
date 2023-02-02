const express = require("express");
const router = express.Router();

const AdminOrderController = require("../controller/adminOrder.controller");
const adminOrderController = new AdminOrderController();

router.get("/", adminOrderController.findAdminOrder);
router.put("/", adminOrderController.adminOrderStatus);

module.exports = router;
