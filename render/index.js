const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs', { pageName: '' });
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

module.exports = router;
