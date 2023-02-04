const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");
const MemberController = require("../controller/member.controller");
const memberController = new MemberController();

router.get("/", authMiddleware, memberController.findMemberAll);
router.put("/", authMiddleware, memberController.blackList);

module.exports = router;
