$(document).ready(function () {
  orderList();
});

function orderList() {
  axios({
    method: 'get',
    url: '/api/order',
    data: {},
  }).then(async (response) => {
    const data = response.data.orders;
    for (let i in data) {
      let orderId = data[i].orderId;
      let img = data[i].img;
      let item_name = data[i].item_name;
      let createdAt = data[i].createdAt;
      let price = data[i].price;
      let status = data[i].status;

      let empty_html = `<tr
      ng-repeat="person in main.persons | filter: searchPerson | orderBy: main.orderType : main.orderReverse"
    >
      <td>${orderId}</td>
      <td>
        <img class="order_item_image" src="/images/${img}" />
      </td>
      <td>${item_name}</td>
      <td>${price}</td>
      <td>${status}</td>
      <td>${createdAt}</td>
    </tr>`;

      $('#order_list').append(empty_html);
    }
  });
}
