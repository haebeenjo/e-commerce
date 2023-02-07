const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('admin');
  res.redirect('http://localhost:4000');
});

module.exports = router;
