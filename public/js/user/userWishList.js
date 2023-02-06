$(document).ready(function () {
  cartList();
});

const modal = document.getElementById('modal');

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function cartList() {
  axios({
    method: 'get',
    url: '/api/cart',
    data: {},
  }).then(async (response) => {
    const data = response.data.carts;
    for (let i in data) {
      let itemId = data[i].itemId;
      let img = data[i].img;
      let item_name = data[i].item_name;
      let price = data[i].price;
      let cartId = data[i].cartId;

      let empty_html = `<tr>
      <td><input class="checkbox" name="checkbox" type="checkbox" checked="checked" value="${price}"></td>
      <td class="order_itemId" value="${itemId}">${itemId}</td>
      <td>
        <img class="order_item_image" src="${img}" />
      </td>
      <td>${item_name}</td>
      <td>${parseInt(price).toLocaleString()}</td>
      <td><button onclick="deleteCart(${cartId})">삭제</button></td>
    </tr>`;

      $('#cart_list').append(empty_html);
    }
    totalPrice();
  });
}

function totalPrice() {
  const price = [];
  const total = document.getElementsByClassName('checkbox');
  for (let i = 0; i < total.length; i++) {
    if (total[i].checked === true) {
      price.push(parseInt(total[i].value));
    }
  }

  let totalPrice = price.reduce((arr, cur) => {
    return (arr += cur);
  }, 0);

  let price_html = `<tr
  ng-repeat="person in main.persons | filter: searchPerson | orderBy: main.orderType : main.orderReverse"
>
  <td class="totalPrice">${totalPrice}</td>
  <td><button type="button" onclick="openModal()" class="btn-modal">주문 하기</button></td>
</tr>`;

  $('#price_order').append(price_html);
}

function deleteCart(cartId) {
  axios({
    method: 'delete',
    url: '/api/cart',
    data: {
      cartId: cartId,
    },
  }).then(() => {
    window.location.reload();
  });
}

function itemAllChk() {
  if (document.getElementById('itemAll').checked) {
    let obj = document.getElementsByName('checkbox');
    for (i = 0; i < obj.length; i++) {
      obj[i].checked = true;
    }
  } else {
    let obj = document.getElementsByName('checkbox');
    for (i = 0; i < obj.length; i++) {
      obj[i].checked = false;
    }
  }
}
