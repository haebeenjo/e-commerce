function cartOrder() {
  const itemId = document.getElementsByClassName('item_id');
  for (let i = 0; i < itemId.length; i++) {
    createOrder(i);
  }
}

function createOrder(i) {
  let name = $('#order_name').val();
  let phone_number = $('#order_phone_number').val();
  let address = $('#order_address').val();
  const id = document.getElementsByClassName('item_id');
  const price = document.getElementsByClassName('price');
  const itemId = parseInt(id[i].textContent);
  const order_price = parseInt(price[i].textContent.replace(/\,/g, ''));
  axios({
    method: 'post',
    url: '/api/order',
    data: {
      name: name,
      phone_number: phone_number,
      address: address,
      itemId: itemId,
      order_price: order_price,
    },
  }).then((response) => {
    window.location.reload();
  });
}
