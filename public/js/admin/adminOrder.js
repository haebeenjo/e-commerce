$(document).ready(function () {
  getAdminOrders();
});

function getAdminOrders() {
  axios({
    method: 'get',
    url: 'api/adminOrder',
  })
    .then((response) => {
      const { data } = response.data;
      let count = 0;

      for (let i in data) {
        count++;
        let orderId = data[i].orderId;
        let item_name = data[i].item_name;
        let user_id = data[i].user_id;
        let name = data[i].name;
        let address = data[i].address;
        let phone_number = data[i].phone_number;
        let status = data[i].status;
        const statusName = ['결제 완료', '배송 준비중', '배송중', '배송 완료'];
        let status_wrap = '';
        statusName.map((text) => {
          status_wrap += `<option value="${text}" ${
            status === text ? 'selected' : ''
          } >
          ${text}</option>`;
        });

        let temp = `
        <tr>
          <td class="table_count">${count}</td>
          <td>${orderId}</td>
          <td>${item_name}</td>
          <td>${user_id}</td>
          <td>${name}</td>
          <td>${address}</td>
          <td>${phone_number}</td>
          <td>
            <select name="order_status" id="order_status">
              ${status_wrap}
            </select>
          </td>
        </tr>`;

        $('#adminOrderList').append(temp);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const body = document.querySelector('body');
body.addEventListener('change', function (e) {
  if (e.target.id !== 'order_status') return;
  const orderId = e.target.parentElement.parentElement.children[1].innerText;
  const order_status = e.target.value;
  orderStatusUpdate(orderId, order_status);
});
function orderStatusUpdate(orderId, order_status) {
  axios
    .put('api/adminOrder', {
      orderId: orderId,
      status: order_status,
    })
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });
}
