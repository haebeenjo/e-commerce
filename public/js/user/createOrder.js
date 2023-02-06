function createOrder() {
  let name = $('#order_name').val();
  let phone_number = $('#order_phone_number').val();
  let address = $('#order_address').val();
  // let itemId = itemId;
  // let order_price = order_price;
  axios({
    method: 'post',
    url: '/api/order',
    data: {
      name: name,
      phone_number: phone_number,
      address: address,
      // itemId: itemId,
      // order_price: order_price,
    },
  }).then((response) => {
    window.location.reload();
  });
}
