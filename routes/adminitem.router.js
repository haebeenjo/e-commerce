const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const { upload } = require('../multer');
// const path = require('path');

// const upload = multer({ dest: 'uploads/' }); // 입력한 파일이 uploads/ 폴더 내에 저장된다.

const adminItemController = require('../controller/adminitem.controller');
const adminitemController = new adminItemController();
router.post(
  '/item/register',

  upload.single('img'),
  adminitemController.createItem
);

router.put(
  '/item/detail/:itemId',

  upload.single('img'),
  adminitemController.putItem);

router.delete('/item/:itemId', adminitemController.deleteItem);

router.get('/adminItem', adminitemController.getItemlist);

module.exports = router;
