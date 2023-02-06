const express = require('express');
const router = express.Router();

const { userMiddleware } = require('../middlewares/auth-middleware');
const SalesAmountController = require('../controller/salesAmount.controller');
const salesAmountController = new SalesAmountController();

router.get('/', userMiddleware, salesAmountController.salesAmount);

module.exports = router;
