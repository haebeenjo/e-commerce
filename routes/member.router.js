const express = require("express");
const router = express.Router();

const MemberController = require("../controller/member.controller");
const memberController = new MemberController();

router.get("/", memberController.findMemberAll);

module.exports = router;
