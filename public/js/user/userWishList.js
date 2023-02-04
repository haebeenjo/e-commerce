$(document).ready(function () {
  cartList();
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

      let empty_html = `<tr
      ng-repeat="person in main.persons | filter: searchPerson | orderBy: main.orderType : main.orderReverse"
    >
      <td></td>
      <td>${itemId}</td>
      <td>
        <img class="order_item_image" src="${img}" />
      </td>
      <td>${item_name}</td>
      <td>${price}</td>
    </tr>`;

      $('#cart_list').append(empty_html);
    }
  });
}
