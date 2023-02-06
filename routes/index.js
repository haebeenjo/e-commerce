const express = require('express');
const router = express.Router();

const userOrderRouter = require('./userOrder.router');
const userCartRouter = require('./userCarts.router');
const itemRouter = require('./item.router');
const memberRouter = require('./member.router');
const adminOrderRouter = require('./adminOrder.router');
const salesAmountRouter = require('./salesAmount.router');
const signupRouter = require('./signupRouter');
const userUpdateRouter = require('./userUpdateRouter');
const loginRouter = require('./loginRouter');

<<<<<<< HEAD
router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/user', userUpdateRouter);

router.use('/member', memberRouter);
router.use('/blackList', memberRouter);
router.use('/adminOrder', adminOrderRouter);
router.use('/salesAmount', salesAmountRouter);
router.use('/order', userOrderRouter);
router.use('/cart', userCartRouter);
=======
const memberRouter = require("./member.router");
const adminOrderRouter = require("./adminOrder.router");
const salesAmountRouter = require("./salesAmount.router");
const signupRouter = require("./signup.router");
const userUpdateRouter = require("./userUpdate.router");
const loginRouter = require("./login.router");
const logoutRouter = require("./logout.router");


router.use("/login", loginRouter);
router.use("/signup", signupRouter);
router.use("/user", userUpdateRouter);
router.use("/logout", logoutRouter);

>>>>>>> origin/login/signup

router.use('/item', itemRouter);
module.exports = router;
