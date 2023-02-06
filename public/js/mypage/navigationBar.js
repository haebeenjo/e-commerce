function selectClass() {
  const pathName = window.location.pathname;
  let pageNum = 0;
  if (pathName === "/adminOrder") {
    pageNum = 1;
  } else if (pathName === "/adminItem") {
    pageNum = 2;
  } else if (pathName === "/adminMember") {
    pageNum = 3;
  } else if (pathName === "/adminSales") {
    pageNum = 4;
  }
  $(".lnb a li").removeClass("active");
  $(`.lnb a:nth-child(${pageNum}) li`).addClass("active");
}

selectClass();
