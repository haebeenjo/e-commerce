const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs', { pageName: '' });
});
// 로그인, 회원가입 관련 페이지
router.get('/login', (req, res) => {
  res.render('index.ejs', { pageName: 'login' });
});

router.get('/adminOrder', (req, res) => {
  res.render('index.ejs', { pageName: 'adminOrder' });
});

router.get('/adminItem', (req, res) => {
  res.render('index.ejs', { pageName: 'adminItem' });
});

router.get('/adminMember', (req, res) => {
  res.render('index.ejs', { pageName: 'adminMember' });
});

router.get('/adminSales', (req, res) => {
  res.render('index.ejs', { pageName: 'adminSales' });
});

router.get('/item/register', (req, res) => {
  res.render('index.ejs', { pageName: 'itemregister' });
});

router.get('/item/status', (req, res) => {
  res.render('index.ejs', { pageName: 'itemstatus' });
});

router.get('/item/detail', (req, res) => {
  res.render('index.ejs', { pageName: 'itemdetail' });
});

router.get("/office", (req, res) => {
  res.render("index.ejs", { pageName: "office" });
});

router.get("/design", (req, res) => {
  res.render("index.ejs", { pageName: "design" });
});

router.get("/developer", (req, res) => {
  res.render("index.ejs", { pageName: "developer" });
});

router.get("/music", (req, res) => {
  res.render("index.ejs", { pageName: "music" });
});

router.get("/sports", (req, res) => {
  res.render("index.ejs", { pageName: "sports" });
});

router.get("/itemDetail/:id", (req, res) => {
  res.render("index.ejs", { pageName: "itemDetail" });
});

module.exports = router;
