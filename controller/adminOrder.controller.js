const AdminOrderService = require("../services/adminOrder.service");

class AdminOrderController {
  adminOrderService = new AdminOrderService();

  findAdminOrder = async (req, res, next) => {
    try {
      const { adminId } = res.locals.admin;
      console.log("✨✨✨", adminId, "✨✨✨");
      const findAdminOrder = await this.adminOrderService.findAdminOrder();

      res.status(201).json({ data: findAdminOrder });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };

  adminOrderStatus = async (req, res, next) => {
    try {
      const { orderId, status } = req.body;
      const adminOrderStatus = await this.adminOrderService.adminOrderStatus(
        orderId,
        status
      );
      res.status(201).json({ message: "수정이 완료되었습니다." });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };
}

module.exports = AdminOrderController;
