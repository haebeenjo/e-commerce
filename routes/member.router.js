const express = require("express");
const router = express.Router();

const MemberController = require("../controller/member.controller");
const memberController = new MemberController();

router.get("/", memberController.findMemberAll);
router.put("/", memberController.blackList);

module.exports = router;
