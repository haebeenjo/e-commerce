let token = document.cookie.split("=")[1];

$(document).ready(function () {
  getshop_info();
});

function getshop_info() {
  $.ajax({
    type: "GET",
    url: "/api/auth_shop/me",
    success: function (response) {
      let user_data = response.user;
      let empty_html = `<h1>Laundr:f</h1>
                                    <ul class="gnb">
                                    <a href="shop_review"><li class="user_review">리뷰관리</li></a>
                                    <a href="http://localhost:4000/my_info_edit_shop"><li class="user_info_edit">회원정보수정</li></a>
                                    <a href="http://localhost:4000/logout"><li class="user_logout">로그아웃</li></a>
                                    <li class="user_nickname">${user_data.shop_name}님</li>
                                    </ul>
                                    <p class="user_point">잔여 포인트 : ${user_data.point}</p>`;
      $("#header_wrap").append(empty_html);
    },
  });
}
