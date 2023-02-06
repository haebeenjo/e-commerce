$(document).ready(function () {
  findToken();
});

function findToken() {
  const token = document.cookie;
  let empty_html = ``;
  if (token) {
    empty_html = `<a href="">
    <li class="header_register">로그아웃</li>
  </a>
  <a href="">
    <li class="header_login">장바구니</li>
  </a>
  <a href="">
    <li class="header_register">마이페이지</li>
  </a>`;
  } else if (!token) {
    empty_html = `<a href="login">
    <li class="header_login">로그인</li>
  </a>
  <a href="register">
    <li class="header_register">회원가입</li>
  </a>
  `;
  }

  if (token) {
    const point = document.getElementById('user_point');
    point.innerHTML = '잔여 포인트 : 1,000,000';
  }

  $('.member_wrap').append(empty_html);
}