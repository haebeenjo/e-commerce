const express = require("express");
const router = express.Router();

const ItemController = require('../controller/item.controller');
const itemController = new ItemController();

router.get('/item', itemController.findAllItems);
router.get('/item/:id', itemController.findOneItem);
router.get('/item/category/:categoryId', itemController.findCategoryItem);

module.exports = router;