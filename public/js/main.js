// 이미지 슬라이더

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 2;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => (current < 2 ? gotoNum(current + 1) : gotoNum(0));

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next == 3) {
    next = 0;
  }

  if (prev == -1) {
    prev = 2;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};

// 전체 아이템 리스트 조회 && 페이지 네이션

let query = window.location.search;
let param = new URLSearchParams(query);
let page = Number(param.get("page"));

// if (!page || page === 1) {
//   fetch(`http://localhost:4000/api/item/`)
//     .then((response) => response.json())
//     .then((data) => {
//       for (let i = 0; i < data.data.length; i++) {
//         console.log("✨✨✨", "data: ", data, "✨✨✨");
//         debugger;
//         const producsHtml = data.data.map(
//           (item) => `
//         <a class="board" href="/itemDetail/${item.itemId}">
//         ${
//           item.img
//             ? `<div class="content__thumbnail"><img src="./images/${item.img}" /></div>`
//             : ""
//         }
//         <!-- 여기서부터 content 제품명, 가격 -->
//         <div class="content__text">
//           <div class="content__title">상품명 : ${item.item_name}</div>
//           <div class="content__price">가격 : ${item.price}</div>
//         </div>
//         </a>`
//         );
//         document.getElementById("feed").innerHTML = producsHtml.join("");
//       }
//     });
// } else if () {
//   fetch(`http://localhost:4000/api/item?page=${page}`)
//     .then((response) => response.json())
//     .then((data) => {
//       for (let i = 0; i < data.data.length; i++) {
//         const producsHtml = data.data.map(
//           (item) => `
//         <a class="board" href="/itemDetail/${item.itemId}">
//         ${
//           item.img
//             ? `<div class="content__thumbnail"><img src="./images/${item.img}" /></div>`
//             : ""
//         }
//         <!-- 여기서부터 content 제품명, 가격 -->
//         <div class="content__text">
//           <div class="content__title">상품명 : ${item.item_name}</div>
//           <div class="content__price">가격 : ${item.price}</div>
//         </div>
//         </a>`
//         );
//         document.getElementById("feed").innerHTML = producsHtml.join("");
//       }

//     });
// }
if (!page || page === 1) {
  fetch(`http://localhost:4000/api/item/`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        console.log("✨✨✨", "data: ", data, "✨✨✨");
        const producsHtml = data.data.map(
          (item) => `
        <a class="board" href="/itemDetail/${item.itemId}">
        ${
          item.img
            ? `<div class="content__thumbnail"><img src="./images/${item.img}" /></div>`
            : ""
        }
        <!-- 여기서부터 content 제품명, 가격 -->
        <div class="content__text">
          <div class="content__title">상품명 : ${item.item_name}</div>
          <div class="content__price">가격 : ${item.price}</div>
        </div>
        </a>`
        );
        document.getElementById("feed").innerHTML = producsHtml.join("");
      }

      // const pages = `
      //       <a class="link_page" href="/?page=1">1</a>
      //       <a class="link_page" href="/?page=2">2</a>
      //       <a class="link_page" href="/?page=3">3</a>
      //       <a class="link_page" href="/?page=4">...</a>
      //       <a class="link_page" href="/?page=${data.pageInfo.lastPage}">${data.pageInfo.lastPage}</a>
      //       `;

      // const a = document.createElement("a");
      // a.innerHTML = pages;
      // document.getElementById("pagination").appendChild(a);
    });
} else {
  fetch(`http://localhost:4000/api/item?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        const producsHtml = data.data.map(
          (item) => `
        <a class="board" href="/itemDetail/${item.itemId}">
        ${
          item.img
            ? `<div class="content__thumbnail"><img src="./images/${item.img}" /></div>`
            : ""
        }
        <!-- 여기서부터 content 제품명, 가격 -->
        <div class="content__text">
          <div class="content__title">상품명 : ${item.item_name}</div>
          <div class="content__price">가격 : ${item.price}</div>
        </div>
        </a>`
        );
        document.getElementById("feed").innerHTML = producsHtml.join("");
      }

      if (page === 3) {
        const pages = `
            <a class="link_page" href="/?page=1">1</a>
            <a class="link_page" href="/?page=2">2</a>
            <a class="link_page" href="/?page=${page}">${page}</a>
            <a class="link_page" href="/?page=4">4</a>
            <a class="link_page" href="/?page=4">...</a>
            <a class="link_page" href="/?page=${data.pageInfo.lastPage}">${data.pageInfo.lastPage}</a>
            `;
        const a = document.createElement("a");
        a.innerHTML = pages;
        document.getElementById("pagination").appendChild(a);
      } else if (page === data.pageInfo.lastPage) {
        const pages = `
            <a class="link_page" href="/?page=1">1</a>
            <a class="link_page" href="/?page=${page - 2}">...</a>
            <a class="link_page" href="/?page=${page - 1}">${page - 1}</a>
            <a class="link_page" href="/?page=${page}">${page}</a>
            `;
        const a = document.createElement("a");
        a.innerHTML = pages;
        return document.getElementById("pagination").appendChild(a);
      } else if (page === data.lastPage - 1) {
        const pages = `
            <a class="link_page" href="/?page=1">1</a>
            <a class="link_page" href="/?page=${page - 2}">...</a>
            <a class="link_page" href="/?page=${page - 1}">${page - 1}</a>
            <a class="link_page" href="/?page=${page}">${page}</a>
            `;
        const a = document.createElement("a");
        a.innerHTML = pages;
        return document.getElementById("pagination").appendChild(a);
      } else if (page === data.lastPage - 2) {
        const pages = `
            <a class="link_page" href="/?page=1">1</a>
            <a class="link_page" href="/?page=${page - 2}">...</a>
            <a class="link_page" href="/?page=${page - 1}">${page - 1}</a>
            <a class="link_page" href="/?page=${page}">${page}</a>
            `;
        const a = document.createElement("a");
        a.innerHTML = pages;
        return document.getElementById("pagination").appendChild(a);
      } else if (page < 3) {
        const pages = `
            <a class="link_page" href="/?page=1">1</a>
            <a class="link_page" href="/?page=${page}">${page}</a>
            <a class="link_page" href="/?page=3">3</a>
            <a class="link_page" href="/?page=4">...</a>
            <a class="link_page" href="/?page=${data.pageInfo.lastPage}">${data.pageInfo.lastPage}</a>
            `;
        const a = document.createElement("a");
        a.innerHTML = pages;
        return document.getElementById("pagination").appendChild(a);
      } else if (page > 3) {
        const pages = `
            <a class="link_page" href="/?page=1">1</a>
            <a class="link_page" href="/?page=${page - 2}">...</a>
            <a class="link_page" href="/?page=${page - 1}">${page - 1}</a>
            <a class="link_page" href="/?page=${page}">${page}</a>
            <a class="link_page" href="/?page=${page + 1}">${page + 1}</a>
            <a class="link_page" href="/?page=${page + 2}">...</a>
            <a class="link_page" href="/?page=${data.pageInfo.lastPage}">${
          data.pageInfo.lastPage
        }</a>
            `;
        const a = document.createElement("a");
        a.innerHTML = pages;
        return document.getElementById("pagination").appendChild(a);
      }
    });
}
