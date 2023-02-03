const express = require('express');
const UserCartController = require('../controller/userCarts.controller');
const router = express.Router();

const userCartController = new UserCartController();

router.post('/', userCartController.createCart);
router.get('/', userCartController.findCart);
router.delete('/', userCartController.deleteCart);

module.exports = router;
