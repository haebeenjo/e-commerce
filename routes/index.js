const express = require("express");
const router = express.Router();

const memberRouter = require("./member.router");
const adminOrderRouter = require("./adminOrder.router");

router.use("/member", memberRouter);
router.use("/blackList", memberRouter);
router.use("/adminOrder", adminOrderRouter);

module.exports = router;
