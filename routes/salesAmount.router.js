const express = require("express");
const router = express.Router();

const SalesAmountController = require("../controller/salesAmount.controller");
const salesAmountController = new SalesAmountController();

router.get("/", salesAmountController.salesAmount);

module.exports = router;
