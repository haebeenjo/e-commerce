const express = require('express');
const router = express.Router();
const { adminMiddleware } = require('../middlewares/auth-middleware');
const { upload } = require('../multer');
// const path = require('path');

// const upload = multer({ dest: 'uploads/' }); // 입력한 파일이 uploads/ 폴더 내에 저장된다.

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
  adminitemController.putItem);

router.delete('/item/:itemId', adminMiddleware, adminitemController.deleteItem);

router.get('/adminItem', adminMiddleware, adminitemController.getItemlist);

module.exports = router;
