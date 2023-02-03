const express = require('express');
const router = express.Router();

const userOrderRouter = require('./userOrder.router');
const userCartRouter = require('./userCarts.router');
const memberRouter = require('./member.router');
const adminOrderRouter = require('./adminOrder.router');
const salesAmountRouter = require('./salesAmount.router');

router.use('/member', memberRouter);
router.use('/blackList', memberRouter);
router.use('/adminOrder', adminOrderRouter);
router.use('/salesAmount', salesAmountRouter);
router.use('/order', userOrderRouter);
router.use('/cart', userCartRouter);

module.exports = router;
