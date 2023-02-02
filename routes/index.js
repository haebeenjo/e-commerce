const express = require('express');
const router = express.Router();

const itemRouter = require('./item.router');

router.use('/', itemRouter);

module.exports = router;
