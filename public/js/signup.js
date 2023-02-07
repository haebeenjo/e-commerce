
function signup_user() {
  const email = $("#email").val();
  const phone_number = $("#phone_number").val();
  const password = $("#password").val();
  const name = $("#name").val();
  const address = $("#address").val();
  const re_email = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/;

  if (!email || !password || !address || ! phone_number || !name) {
    alert("빈칸 없이 채워주세요.");
  } if (email.search(re_email) === -1) {
    alert('ID의 형식이 일치하지 않습니다');
  } else {
    $.ajax({
      type: "post",
      url: "api/signup",
      data: {
        email,
        phone_number,
        password,
        name,
        address
      },
      success: function (response) {
        alert(`${email}님 회원가입이 완료되었습니다`);
        location.href = "/login";
      },
      error: function (error) {
        alert("회원가입 실패");
        console.log("에러이유:", error);
      },
    });
  }
}
