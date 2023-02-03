const express = require('express');
const router = express.Router();

const ItemController = require('../controller/item.controller');
const itemController = new ItemController();

const multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
const path = require('path');

const upload = multer({ dest: 'uploads/' }); // 입력한 파일이 uploads/ 폴더 내에 저장된다.

// 단일 파일 업로드
router.post('/item', upload.single('file'), itemController.createItem);
router.put('/item/:itemId', itemController.putItem);

router.delete('/item/:itemId', itemController.deleteItem);

module.exports = router;
