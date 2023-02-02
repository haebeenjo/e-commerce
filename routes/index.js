const express = require('express');
const router = express.Router();

// const loginRouter = require('./loginRouter');

// 상품 등록, 수정, 삭제, 상태변경
const itemRouter = require('./itemRouter.js');
router.use('/', [itemRouter]);

module.exports = router;
