$(document).ready(function () {
  getAdminOrders();
});

// axios get
function getAdminOrders() {
  axios({
    method: "get",
    url: "api/adminOrder",
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
            <select name="order_status" id="">
              <option value="${status}" selected>${status}</option>
              <option value="결제 완료">결제 완료</option>
              <option value="배송 준비중">배송 준비중</option>
              <option value="배송중">배송중</option>
              <option value="배송 완료">배송 완료</option>
            </select>
          </td>
        </tr>`;

        $("#adminOrderList").append(temp);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
