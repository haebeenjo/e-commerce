const express = require("express");
const router = express.Router();

const { userMiddleware } = require('../middlewares/auth-middleware');
const MemberController = require("../controller/member.controller");
const memberController = new MemberController();

router.get("/", userMiddleware, memberController.findMemberAll);
router.put("/", userMiddleware, memberController.blackList);

module.exports = router;
