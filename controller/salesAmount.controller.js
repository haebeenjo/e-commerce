const SalesAmountService = require("../services/salesAmount.service");

class SalesAmountController {
  salesAmountService = new SalesAmountService();

  salesAmount = async (req, res, next) => {
    try {
      const salesAmount = await this.salesAmountService.salesAmount();

      res.status(201).json({ data: salesAmount });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };
}

module.exports = SalesAmountController;
