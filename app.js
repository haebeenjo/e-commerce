const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./routes');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
// app.use('/', render);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});

module.exports = app;
