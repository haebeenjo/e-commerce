const UserOrderRepository = require('../repositories/userOrder.repository');
const UserRepository = require('../repositories/userRepository');
const { Users, Items, Orders } = require('../models');

class UserOrderService {
  userOrderRepository = new UserOrderRepository(Orders, Items, Users);
  userPointRepository = new UserRepository();

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
    const userPointMinus = await this.userPointRepository.userPointMinus(
      order_price,
      userId
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
        createdAt: order.createdAt
          .toISOString()
          .substring(0, 10)
          .replaceAll('-', '.'),
        orderId: order.orderId,
      };
    });
  };
}

module.exports = UserOrderService;
