const express = require("express");
const router = express.Router();

// 상품 등록, 수정, 삭제
const itemRouter = require("./item.router");

const memberRouter = require("./member.router");
const adminOrderRouter = require("./adminOrder.router");
const salesAmountRouter = require("./salesAmount.router");
const signupRouter = require("./signup.router");
const userUpdateRouter = require("./userUpdate.router");
const loginRouter = require("./login.router");
const logoutRouter = require("./logout.router");
const adminLoginRouter = require("./adminLogin.router");


router.use("/login", loginRouter);
router.use("/signup", signupRouter);
router.use("/user", userUpdateRouter);
router.use("/logout", logoutRouter);
router.use("/adminLogin",adminLoginRouter);


router.use("/member", memberRouter);
router.use("/blackList", memberRouter);
router.use("/adminOrder", adminOrderRouter);
router.use("/salesAmount", salesAmountRouter);

router.use("/item", itemRouter);
module.exports = router;
