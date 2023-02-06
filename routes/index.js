const express = require('express');
const router = express.Router();

const itemRouter = require('./item.router');
const adminitemRouter = require('./adminitem.router');
const memberRouter = require('./member.router');
const adminOrderRouter = require('./adminOrder.router');
const salesAmountRouter = require('./salesAmount.router');
const signupRouter = require('./signupRouter');
const userUpdateRouter = require('./userUpdateRouter');
const loginRouter = require('./loginRouter');

router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/user', userUpdateRouter);

router.use('/member', memberRouter);
router.use('/blackList', memberRouter);
router.use('/adminOrder', adminOrderRouter);
router.use('/salesAmount', salesAmountRouter);

router.use('/', adminitemRouter);
router.use('/item', itemRouter);
router.use("/member", memberRouter);
router.use("/blackList", memberRouter);
router.use("/adminOrder", adminOrderRouter);
router.use("/salesAmount", salesAmountRouter);

module.exports = router;
