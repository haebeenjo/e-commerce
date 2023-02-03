const item_name = document.getElementById('item_name').value;
const price = document.getElementById('price').value;
const img = document.getElementById('img').value;
const category = document.getElementById('category').value;
const detail = document.getElementById('detail').value;
const item_status = document.getElementById('item_status').value;

// axios post
const itemRequest = () => {
  const formData = new FormData();
  formData.append('item_name', item_name.value);
  formData.append('detail', detail.value);
  formData.append('price', price.value);
  formData.append('category', category.value);
  formData.append('item_status', item_status.value);

  for (let i = 0; i < imageUrl.files.length; i++) {
    formData.append('files', imageUrl.files[i]);
  }
  axios
    .post('/item/register', {
      item_name: item_name,
      price: price,
      img: img,
      category: category,
      detail: detail,
    })
    .then((response) => {
      console.log(response);
      window.location.replace(`/adminItem`);
    })
    .catch((error) => {
      console.log('axios error: ', error);
    });
};

// axios put
function putItem(item_name, price, detail, img, category, item_status) {
  axios
    .put('/detail/${itemId}', {
      item_name: item_name,
      price: price,
      img: img,
      category: category,
      detail: detail,
    })
    .then((res) => {
      console.log(res);
      window.location.replace(`/adminItem`);
    })
    .catch((error) => {
      console.log('axios error: ', error);
    });
}

// axios get
function getItems() {
  axios
    .get('/item/Status', {
      params: {},
    })
    .then((res) => {
      console.log(res);
      let { data } = res.data;

      const itemList = document.getElementById('itemList');
      itemList.innerHTML = '';
      //   document.querySelector('#item_form').innerHTML = '';

      for (let i = 0; i < data.length; i++) {
        const temp = `
                <div class="inputfield">
                  <label>상품 이름</label>
                  <input type="text" class="input" />
                  <div class="item_name">
                    <h4>상품명</h4>
                    <div>${data[i].item_name}</div>
                  </div>
                </div>
                <div class="inputfield">
                  <label>상품 사진</label>
                  <input type="file" id="img" name="img" class="input" />
                  <img class="img" src="${data[i].img}" />
                </div>
                <div class="inputfield">
                  <label>가격</label>
                  <input type="text" class="input" />
                  <div class="price">
                    <h4>가격</h4>
                    <div>${data[i].price}</div>
                  </div>
                </div>
                <div class="inputfield">
                  <label>카테고리</label>
                </div>
                <div class="inputfield">
                  <input type="checkbox" id="c1" name="cc" />
                  <label for="c1"><span></span>office</label>
                  <input type="checkbox" id="c2" name="cc" />
                  <label for="c2"><span></span>design</label>
                  <input type="checkbox" id="c3" name="cc" />
                  <label for="c3"><span></span>developer</label>
                  <input type="checkbox" id="c4" name="cc" />
                  <label for="c4"><span></span>music</label>
                  <input type="checkbox" id="c5" name="cc" />
                  <label for="c5"><span></span>sports</label>
                </div>
                <div class="category">
                    <h4>카테고리</h4>
                    <div>${data[i].category}</div>
                </div>
            
                <div class="inputfield">
                  <label>판매 상태</label>
                  <input type="text" class="input" />
                  <div class="item_status">
                    <h4>상품 설명</h4>
                    <div>${data[i].item_status}</div>
                  </div>
                </div>
                <div class="inputfield">
                  <input onclick="itemRequest()" type="button" value="save" class="btn" />
                </div>
              `;
        itemList.append(temp);
      }
    })
    .catch((error) => {
      console.log('axios error: ', error);
    });
}

// axios delete
function deleteItem(itemId) {
  axios
    .delete('/api/item/${itemId}', {})
    .then((res) => {
      console.log(res);
      window.location.replace(`/item`);
    })
    .catch((err) => {
      console.log(err);
    });
}
