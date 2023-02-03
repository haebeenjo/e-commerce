const express = require('express');
const router = express.Router();

// const loginRouter = require('./loginRouter');

// 상품 등록, 수정, 삭제, 상태변경
const itemRouter = require('./itemRouter.js');
const memberRouter = require('./member.router');
const adminOrderRouter = require('./adminOrder.router');
const salesAmountRouter = require('./salesAmount.router');

router.use('/member', memberRouter);
router.use('/blackList', memberRouter);
router.use('/adminOrder', adminOrderRouter);
router.use('/salesAmount', salesAmountRouter);

router.use('/', [itemRouter]);
module.exports = router;
