const express = require('express');
const router = express.Router();
const { adminMiddleware } = require('../middlewares/auth-middleware');
const { upload } = require('../multer');

const adminItemController = require('../controller/adminitem.controller');
const adminitemController = new adminItemController();
router.post(
  '/item/register',
  adminMiddleware,
  upload.single('img'),
  adminitemController.createItem
);

router.put(
  '/item/detail/:itemId',
  adminMiddleware,
  upload.single('img'),
  adminitemController.putItem
);

router.delete('/item/:itemId', adminMiddleware, adminitemController.deleteItem);

router.get('/adminItem', adminMiddleware, adminitemController.getItemlist);

module.exports = router;
