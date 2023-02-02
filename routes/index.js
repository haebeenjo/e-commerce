const express = require('express');
const router = express.Router();

const userOrderRouter = require('./userOrderRouter');
const userCartRouter = require('./userCartsRouter');

router.use('/order', userOrderRouter);
router.use('/cart', userCartRouter);

module.exports = router;
