const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs', { pageName: '' });
});

router.get('/mypage', (req, res) => {
  res.render('index.ejs', { pageName: 'mypage' });
});

router.get('/userorderlist', (req, res) => {
  res.render('index.ejs', { pageName: 'userorderlist' });
});

router.get('/mypageuser', (req, res) => {
  res.render('index.ejs', { pageName: 'mypageuser' });
});

module.exports = router;
