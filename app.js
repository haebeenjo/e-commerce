const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const render = require('./render');

const router = require('./routes');
const app = express();

// socket 모듈
const http = require('http');
const fs = require('fs');
const socket = require('socket.io');
const server = http.createServer(app); /* express http 서버 생성 */
const io = socket(server); /* 생성된 서버를 socket.io에 바인딩 */

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/api', router);
app.use('/', render);
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));

// ------------------------------------------------------------------

io.on('connection', (socket) => {
  /* 새로운 유저가 접속했을 경우 다른 소켓에게도 알려줌 */
  socket.on('newUser', (name) => {
    console.log(name + ' 님이 접속하였습니다.');

    /* 소켓에 이름 저장해두기 */
    socket.name = name;

    /* 모든 소켓에게 전송 */
    io.sockets.emit('update', {
      type: 'connect',
      name: '',
      message: name + '님이 접속하였습니다.',
    });
  });

  /* 전송한 메시지 받기 */
  socket.on('message', (data) => {
    /* 받은 데이터에 누가 보냈는지 이름을 추가 */
    data.name = socket.name;

    console.log(data);

    /* 보낸 사람을 제외한 나머지 유저에게 메시지 전송 */
    socket.broadcast.emit('update', data);
  });

  /* 접속 종료 */
  socket.on('disconnect', () => {
    console.log(socket.name + '님이 나가셨습니다.');

    /* 나가는 사람을 제외한 나머지 유저에게 메시지 전송 */
    socket.broadcast.emit('update', {
      type: 'disconnect',
      name: 'SERVER',
      message: socket.name + '님이 나가셨습니다.',
    });
  });
});

server.listen(process.env.PORT, () => {
  console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});

module.exports = server;
