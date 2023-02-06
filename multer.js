// 'use strict';

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // 저장 공간 할당, upload 폴더 생성
//   },
//   filename: (req, file, cb) => {
//     // 중복 저장 방지를 위해 Date.now()를 통해 원본 + 시간을 합쳐 저장
//     cb(null, new Date().valueOf() + path.extname(file.originalname));
//   },
//   limits: { fileSize: 5 * 1024 * 1024 }, // 파일 사이즈를 5MB로 제한
// });

// const upload = multer({ storage: storage });

const multer = require('multer');
const path = require('path');
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, './public/images');
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      const fileName = path.basename(file.originalname, ext) + Date.now() + ext;
      done(null, fileName);
    },
  }),
  limits: { fileSize: 30 * 1024 * 1024 },
});

module.exports = { upload };
