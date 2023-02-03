class SalesAmountRepository {
  constructor(OrderModel, ItemModel) {
    this.OrderModel = OrderModel;
    this.ItemModel = ItemModel;
  }
  salesAmount = async () => {
    try {
      const salesAmount = await this.OrderModel.findAll({
        where: { status: "판매 완료" },
        include: { model: this.ItemModel },
      });
      return salesAmount;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = SalesAmountRepository;
