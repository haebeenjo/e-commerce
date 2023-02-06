function signup_user() {
  const name = $("#name").val();
  const address = $("#address").val();
  const phone_number = $("#phone_number").val();
  const password = $("#password").val();
  const email = $("#email").val();

  if (!email || !password) {
    alert("닉네임 또는 비밀번호가 입력되지 않았습니다.");
  } else {
    $.ajax({
      type: "PUT",
      url: "http://localhost:4000/api/signup",
      data: {
        name,
        address,
        phone_number,
        password,
        email
      },
      success: function (response) {
        alert(`${email}님 회원가입이 완료되었습니다`);
        token = response.token;
        location.href = "http://localhost:4000/api/login";
      },
      error: function (error) {
        alert("회원정보 수정 실패");
        console.log("에러이유:", error);
      },
    });
  }
}
