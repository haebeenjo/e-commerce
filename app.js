const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./src/routes');
const app = express();


app.use('/api', router);


app.listen(process.env.PORT, () => {
	console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});
  
module.exports = app;