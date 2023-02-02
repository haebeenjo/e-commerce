class AdminOrderRepository {
  constructor(OrderModel, ItemModel) {
    this.OrderModel = OrderModel;
    this.ItemModel = ItemModel;
  }
  findAdminOrder = async () => {
    try {
      const findAdminOrder = await this.OrderModel.findAll({
        include: { model: this.ItemModel },
      });
      return findAdminOrder;
    } catch (error) {
      throw error;
    }
  };

  adminOrderStatus = async (orderId, status) => {
    try {
      const orderStatusUpdate = await this.OrderModel.update(
        { status },
        { where: { orderId } }
      );
      return orderStatusUpdate;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = AdminOrderRepository;
