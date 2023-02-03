const UserOrderRepository = require('../repositories/userOrder.repository');
const { Users, Items, Orders } = require('../models');

class UserOrderService {
  userOrderRepository = new UserOrderRepository(Orders, Items, Users);

  createOrder = async (
    name,
    phone_number,
    address,
    itemId,
    userId,
    order_price
  ) => {
    const createOrderData = await this.userOrderRepository.createOrder(
      name,
      phone_number,
      address,
      itemId,
      userId,
      order_price
    );
    return createOrderData;
  };

  findOrder = async (userId) => {
    const orders = await this.userOrderRepository.findOrder(userId);

    orders.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    return orders.map((order) => {
      return {
        img: order.img,
        item_name: order.item_name,
        status: order.status,
        price: order.price,
        createdAt: order.createdAt,
      };
    });
  };
}

module.exports = UserOrderService;