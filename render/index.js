const express = require("express");
const router = express.Router();

// 메인페이지
router.get("/", (req, res) => {
  res.render("index.ejs", { pageName: "" });
});
// 로그인, 회원가입 관련 페이지 router.get("login", (req, res) => {
router.get("api/login", (req, res) => {
  res.render("index.ejs", { pageName: "login" });
});

// Admin 페이지
router.get("/adminOrder", (req, res) => {
  res.render("index.ejs", { pageName: "adminOrder" });
});

router.get("/adminItem", (req, res) => {
  res.render("index.ejs", { pageName: "adminItem" });
});

router.get("/adminMember", (req, res) => {
  res.render("index.ejs", { pageName: "adminMember" });
});

router.get("/adminSales", (req, res) => {
  res.render("index.ejs", { pageName: "adminSales" });
});

router.get("/item/register", (req, res) => {
  res.render("index.ejs", { pageName: "itemregister" });
});

router.get("/item/status", (req, res) => {
  res.render("index.ejs", { pageName: "itemstatus" });
});

// router.post("/api/login", (req, res) => {
//   res.render("index.ejs", { pageName: "login" });
// });


module.exports = router;
