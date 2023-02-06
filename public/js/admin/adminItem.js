$(document).ready(function () {
  getItems();
});

// axios get
function getItems() {
  axios({
    method: "get",
    url: "api/adminItem",
  })
    .then((response) => {
      const { data } = response.data;
      let count = 0;

      for (let i in data) {
        count++;
        let itemId = data[i].itemId;
        let item_name = data[i].item_name;
        let item_status = data[i].item_status;

        let category = "";
        if (data[i].office) {
          category += "office ";
        }
        if (data[i].design) {
          category += "design ";
        }
        if (data[i].developer) {
          category += "developer ";
        }
        if (data[i].music) {
          category += "music ";
        }
        if (data[i].sports) {
          category += "sports ";
        }

        let temp = `<tr
        ng-repeat="person in main.persons | filter: searchPerson | orderBy: main.orderType : main.orderReverse"
      >
        <td class="table_count">${count}</td>
        <td>${item_name}</td>
        <td>${category}</td>
        <td>${item_status}</td>
        <td>
          <div class="btn11">
            <input
              onclick="location.href='/item/detail?itemId=${itemId}'"
              type="button"
              value="수정"
              class="btn1"
            />
            <input
              onclick="deleteItem(${itemId})"
              type="button"
              value="삭제"
              class="btn2"
            />
          </div>
        </td>
      </tr>`;

        $("#itemList").append(temp);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// axios delete
function deleteItem(itemId) {
  axios
    .delete(`/api/item/${itemId}`)
    .then((res) => {
      const returnValue = confirm("삭제하시겠습니까?");
      alert(returnValue);
      console.log(res);
      window.location.href = "/adminItem";
    })
    .catch((err) => {
      console.log(err);
    });
}
