const AdminOrderService = require("../services/adminOrder.service");

class AdminOrderController {
  adminOrderService = new AdminOrderService();

  findAdminOrder = async (req, res, next) => {
    try {
      const findAdminOrder = await this.adminOrderService.findAdminOrder();

      res.status(201).json({ data: findAdminOrder });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };
}

module.exports = AdminOrderController;
