const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");
const SalesAmountController = require("../controller/salesAmount.controller");
const salesAmountController = new SalesAmountController();

router.get("/", authMiddleware, salesAmountController.salesAmount);

module.exports = router;
