$(document).ready(function () {
  getItems();
});

// axios get
function getItems() {
  axios({
    method: 'get',
    url: '/api/adminItem',
  })
    .then((response) => {
      const { data } = response.data;
      console.log(data);
      /* const itemList = document.getElementById('itemList');
        itemList.innerHTML = '';
        //   document.querySelector('#item_form').innerHTML = ''; */

      for (let i in data) {
        let itemId = data[i].itemId;
        let item_name = data[i].item_name;
        // let category_id = data[i].category_id;
        let item_status = data[i].item_status;
        console.log(item_name);
        let temp = `<tr
        ng-repeat="person in main.persons | filter: searchPerson | orderBy: main.orderType : main.orderReverse"
      >
        <td>${itemId}</td>
        <td>${item_name}</td>
        <td>${item_status}</td>
        <td>
          <div class="btn11">
            <input
              onclick="location.href='/item/detail'"
              type="button"
              value="수정"
              class="btn1"
            />
            <input
              onclick="deleteItem()"
              type="button"
              value="삭제"
              class="btn2"
            />
          </div>
        </td>
      </tr>`;

        $('#itemList').append(temp);
      }
    })
    .catch((error) => {
      console.log('axios error: ', error);
    });
}
