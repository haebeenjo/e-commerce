const express = require('express');
const UserCartController = require('../controller/userCarts.controller');
const router = express.Router();

const { userMiddleware } = require('../middlewares/auth-middleware');
const userCartController = new UserCartController();

router.post('/', userMiddleware, userCartController.createCart);
router.get('/', userMiddleware, userCartController.findCart);
router.delete('/', userMiddleware, userCartController.deleteCart);

module.exports = router;
