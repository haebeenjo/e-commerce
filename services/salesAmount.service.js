const SalesAmountRepository = require("../repositories/salesAmount.repository");
const { Orders, Items, Users } = require("../models");

class SalesAmountService {
  salesAmountRepository = new SalesAmountRepository(Orders, Items, Users);

  salesAmount = async () => {
    try {
      const salesAmount = await this.salesAmountRepository.salesAmount();
      const totalSales = salesAmount.map((data) => {
        return {
          orderId: data.orderId,
          email: data.User.email,
          order_price: data.order_price,
          item_name: data.Item.item_name,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        };
      });
      return totalSales;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = SalesAmountService;
