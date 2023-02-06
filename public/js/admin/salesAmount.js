$(document).ready(function () {
  getSalesAmount();
});

// axios get
function getSalesAmount() {
  axios({
    method: "get",
    url: "api/salesAmount",
  })
    .then((response) => {
      const { data } = response.data;
      let count = 0;

      for (let i in data) {
        count++;
        let orderId = data[i].orderId;
        let email = data[i].email;
        let order_price = data[i].order_price;
        let item_name = data[i].item_name;
        let createdAt = data[i].createdAt.substring(0, 10);
        let updatedAt = data[i].updatedAt.substring(0, 10);

        let temp = `
        <tr>
          <td class="table_count">${count}</td>
          <td>${orderId}</td>
          <td>${email}</td>
          <td>${order_price}</td>
          <td>${item_name}</td>
          <td>${createdAt}</td>
          <td>${updatedAt}</td>
        </tr>`;

        $("#salesList").append(temp);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
