const express = require("express");
const router = express.Router();

const { adminMiddleware } = require("../middlewares/auth-middleware");
const MemberController = require("../controller/member.controller");
const memberController = new MemberController();

router.get("/", adminMiddleware, memberController.findMemberAll);
router.put("/", adminMiddleware, memberController.blackList);

module.exports = router;
