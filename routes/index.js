const express = require("express");
const router = express.Router();

const memberRouter = require("./member.router");

router.use("/member", memberRouter);
router.use("/blackList", memberRouter);

module.exports = router;
