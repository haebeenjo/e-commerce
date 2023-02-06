const express = require("express");
const router = express.Router();

const { adminMiddleware } = require('../middlewares/auth-middleware');
const SalesAmountController = require("../controller/salesAmount.controller");
const salesAmountController = new SalesAmountController();

router.get("/", adminMiddleware, salesAmountController.salesAmount);

module.exports = router;
