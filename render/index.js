const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.ejs', { component: '' });
});

router.get('/item/register', (req, res) => {
  res.render('index.ejs', {
    components: 'itemregister',
  });
});

module.exports = router;
