const SalesAmountRepository = require("../repositories/salesAmount.repository");
const { Orders, Items } = require("../models");

class SalesAmountService {
  salesAmountRepository = new SalesAmountRepository(Orders, Items);

  salesAmount = async () => {
    try {
      const salesAmount = await this.salesAmountRepository.salesAmount();
      const totalSales = salesAmount.map((data) => {
        return {
          orderId: data.orderId,
          order_price: data.order_price,
          user_id: data.user_id,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          item_name: data.Item.item_name,
        };
      });
      return totalSales;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = SalesAmountService;
