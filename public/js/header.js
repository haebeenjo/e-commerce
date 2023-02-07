$(document).ready(function () {
  findToken();
});

function findUserPoint() {
  axios({
    method: 'get',
    url: '/api/userPoint',
    data: {},
  }).then(async (response) => {
    const data = response.data.userPoint.point;
    if (data) {
      const point = document.getElementById('user_point');
      point.innerHTML = `잔여 포인트 : ${parseInt(data).toLocaleString()}`;
    }
  });
}

function findToken() {
  const token = document.cookie;
  let empty_html = ``;
  if (token) {
    empty_html = `<a href="api/logout">
    <li class="header_logout">로그아웃</li>
  </a>
  <a href="usercartlist">
    <li class="header_cart">장바구니</li>
  </a>
  <a href="userorderlist">
    <li class="header_mypage">마이페이지</li>
  </a>`;
  } else if (!token) {
    empty_html = `<a href="login">
    <li class="header_login">로그인</li>
  </a>
  <a href="signup">
    <li class="header_register">회원가입</li>
  </a>
  `;
  }

  $('.member_wrap').append(empty_html);
  findUserPoint();
}
