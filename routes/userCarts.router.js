const express = require('express');
const UserCartController = require('../controller/userCarts.controller');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middleware');
const userCartController = new UserCartController();

router.post('/', authMiddleware, userCartController.createCart);
router.get('/', authMiddleware, userCartController.findCart);
router.delete('/', authMiddleware, userCartController.deleteCart);

module.exports = router;
