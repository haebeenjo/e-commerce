const UserOrderService = require('../services/userOrder.service');

class UserOrderController {
  userOrderService = new UserOrderService();

  createOrder = async (req, res) => {
    const userId = res.locals.user.userId;
    const { name, address, phone_number, itemId, order_price } = req.body;
    const createOrderData = await this.userOrderService.createOrder(
      name,
      phone_number,
      address,
      itemId,
      userId,
      order_price
    );
    res.status(201).json({ message: '주문이 완료되었습니다.' });
  };

  findOrder = async (req, res) => {
    const userId = res.locals.user.userId;
    const orders = await this.userOrderService.findOrder(userId);

    res.status(200).json({ orders: orders });
  };
}

module.exports = UserOrderController;
