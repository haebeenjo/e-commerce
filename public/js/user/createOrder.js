function cartOrder() {
  const id = document.getElementsByClassName('item_id');
  const price = document.getElementsByClassName('price');
  const totalPrice = document.getElementById('totalPrice');
  const point = document.getElementById('user_point');
  const orderPrice = parseInt(totalPrice.innerHTML.replace(/\,/g, ''));
  const userPoint = parseInt(point.innerHTML.replace(/\,/g, '').split(':')[1]);
  if (userPoint > orderPrice) {
    for (let i = 0; i < id.length; i++) {
      const itemId = parseInt(id[i].innerHTML);
      const order_price = parseInt(price[i].innerHTML.replace(/\,/g, ''));
      createOrder(itemId, order_price);
    }
  } else {
    alert('포인트가 부족합니다.');
    closeModal();
  }
}

function createOrder(itemId, order_price) {
  let name = $('#order_name').val();
  let phone_number = $('#order_phone_number').val();
  let address = $('#order_address').val();

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
    window.location.href = 'http://localhost:4000/userorderlist';
  });
}
