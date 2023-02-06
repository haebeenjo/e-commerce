class SalesAmountRepository {
  constructor(OrderModel, ItemModel, UserModel) {
    this.OrderModel = OrderModel;
    this.ItemModel = ItemModel;
    this.UserModel = UserModel;
  }
  salesAmount = async () => {
    try {
      const salesAmount = await this.OrderModel.findAll({
        where: { status: "판매 완료" },
        include: [{ model: this.ItemModel }, { model: this.UserModel }],
      });
      return salesAmount;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = SalesAmountRepository;
