const express = require('express');
const router = express.Router();

const ItemController = require('../controller/item.controller');
const itemController = new ItemController();

router.post('/item', itemController.createItem);
router.put('/item/:itemId', itemController.putItem);
router.delete('/item/:itemId', itemController.deleteItem);

module.exports = router;
