const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

class UserOrderRepository {
  constructor(orderModel, itemModel, userModel) {
    (this.orderModel = orderModel),
      (this.itemModel = itemModel),
      (this.userModel = userModel);
  }

  createOrder = async (
    name,
    phone_number,
    address,
    itemId,
    userId,
    order_price
  ) => {
    const result = await this.orderModel.create({
      name: name,
      phone_number: phone_number,
      address: address,
      item_id: itemId,
      user_id: userId,
      order_price: order_price,
    });
    return result;
  };

  findOrder = async (userId) => {
    const query = `SELECT
    Orders.status
    , Orders.createdAt
    , Items.img
    , Items.item_name
    , Items.price
FROM Orders AS Orders
LEFT OUTER JOIN Items ON Orders.item_id = Items.itemId
WHERE Orders.user_id = ?
ORDER BY Orders.createdAt DESC;
`;
    const result = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: [userId],
    });
    console.log(result);
    return result;
  };
}

module.exports = UserOrderRepository;
