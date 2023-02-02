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

  // findItemName = async () => {
  //   try {
  //     const findItemName = await this.ItemModel.findOne({});
  //     return;
  //   } catch (error) {
  //     throw error;
  //   }
  // };
}
module.exports = AdminOrderRepository;
