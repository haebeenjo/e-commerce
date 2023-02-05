const express = require('express');
const router = express.Router();
const { upload } = require('../multer'); // express에 multer모듈 적용 (for 파일업로드)
// const path = require('path');

// const upload = multer({ dest: 'uploads/' }); // 입력한 파일이 uploads/ 폴더 내에 저장된다.

const adminItemController = require('../controller/adminitem.controller');
const adminitemController = new adminItemController();
router.post(
  '/item/register',
  upload.single('img'),
  adminitemController.createItem
); // 단일 파일 업로드

router.put(
  '/item/detail/:itemId',
  upload.single('img'),
  adminitemController.putItem);

router.delete('/item/:itemId', adminitemController.deleteItem);

router.get('/adminItem', adminitemController.getItemlist);

module.exports = router;
