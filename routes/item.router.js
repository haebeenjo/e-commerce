const express = require("express");
const router = express.Router();

const ItemController = require('../controller/item.controller');
const itemController = new ItemController();

router.get('/', itemController.findAllItems);
router.get('/:id', itemController.findOneItem);
router.get('/category/office', itemController.findOfficeItem);
router.get('/category/design', itemController.findDesignItem);
router.get('/category/developer', itemController.findDeveloperItem);
router.get('/category/music', itemController.findMusicItem);
router.get('/category/sports', itemController.findSportsItem);

module.exports = router;