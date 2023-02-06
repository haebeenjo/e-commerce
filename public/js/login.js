
// function setloginuser() {
//   if (token) {
//     $.ajax({
//       type: "get",
//       url: "api/auth/me",
//       data: {},
//       success: function (response) {
//         let user_data = response.user;
//         let user_id = response.user.user_id;
//         location.href = "http://localhost:4000/mypage?id=" + user_id;
//       },
//     });
//   }
// }
let token;

function login_user() {
  const email = $("#email").val();
  const password = $("#password").val();

  if (!email || !password) {
    alert("닉네임 또는 비밀번호가 입력되지 않았습니다.");
  } else {
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/api/login",
      data: {
        email,
        password,
      },
      success: function (response) {
        alert(`로그인 성공, 환영합니다 ${email}님`);
        token = response.token;
        location.href = "http://localhost:4000";
        // setloginuser();
      },
      error: function (error) {
        alert("로그인 실패..............");
        console.log("에러이유:", error);
      },
    });
  }
} 


function register() {
  location.href = "http://localhost:4000/signup";
}
