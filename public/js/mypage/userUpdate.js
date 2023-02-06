
function update_user() {
  const name = $("#name").val();
  const address = $("#address").val();
  const phone_number = $("#phone_number").val();
  const currentPassword = $("#currentPassword").val();
  const newPassword = $("#newPassword").val();
  const confirmedPassword = $("#confirmedPassword").val();

  if (!name && !address && !phone_number && !currentPassword && !newPassword && !confirmedPassword) {
    alert("어떤 정보도 입력되지 않았습니다.");
  } if (currentPassword != null || currentPassword == newPassword){
    alert('현재 비밀번호와 바꿀 비밀번호가 같습니다, 다르게 수정해주세요')
  } if (newPassword !== confirmedPassword){
    alert("새로운 비밀번호 확인이 틀렸습니다.");
  } else {
    $.ajax({
      type: "put",
      url: "http://localhost:4000/api/user",
      data: {
        name,
        address,
        phone_number,
        currentPassword,
        newPassword,
        confirmedPassword
      },
      success: function (response) {
        alert(`${name}님 회원정보가 수정되었습니다`);
        location.href = "/";
      },
      error: function (error) {
        alert("정보수정 실패");
        console.log("에러이유:", error);
      },
    });
  }
}
