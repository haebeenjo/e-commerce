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
