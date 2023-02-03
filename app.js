const express = require('express');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

const { upload } = require('./multer');

const router = require('./routes');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
// app.use('/', render);

//ejs설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views')); //정적파일, 이미지파일

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});

module.exports = app;
