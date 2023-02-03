'use strict';

const multer = require('multer');
const path = require('path');

// class UploadManager {
//   constructor(path) {
//     this.path = path;
//     this.multer = multer;
//   }

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: (req, file, cb) => {
    // 중복 저장 방지를 위해 Date.now()를 통해 원본 + 시간을 합쳐 저장
    cb(null, path.basename(file.fieldname) + '-' + Date.now()); // // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 사이즈를 5MB로 제한
});
// }
// module.exports = UploadManager;

const upload = multer({ storage: storage });
