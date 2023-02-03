const express = require("express");
const router = express.Router();

const ItemController = require('../controller/item.controller');
const itemController = new ItemController();

router.get('/item', itemController.findAllItems);
router.get('/item/:id', itemController.findOneItem);
router.get('/item/category/office', itemController.findOfficeItem);
router.get('/item/category/design', itemController.findDesignItem);
router.get('/item/category/developer', itemController.findDeveloperItem);
router.get('/item/category/music', itemController.findMusicItem);
router.get('/item/category/sports', itemController.findSportsItem);

module.exports = router;