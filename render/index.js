const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs', { pageName: '' });
});

router.get('/userorderlist', (req, res) => {
  res.render('index.ejs', { pageName: 'userorderlist' });
});

router.get('/mypageuser', (req, res) => {
  res.render('index.ejs', { pageName: 'mypageuser' });
});

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

module.exports = router;
