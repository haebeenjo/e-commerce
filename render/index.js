const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs', { pageName: '' });
});

router.get('/mypage', (req, res) => {
  res.render('index.ejs', { pageName: 'mypage' });
});

router.get('/item/register', (req, res) => {
  res.render('index.ejs', { pageName: 'itemregister' });
});

module.exports = router;
