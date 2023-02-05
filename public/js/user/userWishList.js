$(document).ready(function () {
  cartList();
  priceOrder();
});

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

      let empty_html = `<tr
      ng-repeat="person in main.persons | filter: searchPerson | orderBy: main.orderType : main.orderReverse"
    >
      <td><input name="checkbox" type="checkbox" checked="checked" value="${price}"></td>
      <td>${itemId}</td>
      <td>
        <img class="order_item_image" src="${img}" />
      </td>
      <td>${item_name}</td>
      <td>${parseInt(price).toLocaleString()}</td>
      <td><button onclick="deleteCart(${cartId})">삭제</button></td>
    </tr>`;

      $('#cart_list').append(empty_html);
    }
  });
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
