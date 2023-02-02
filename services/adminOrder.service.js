const AdminOrderRepository = require("../repositories/adminOrder.repository");
const { Orders, Items } = require("../models");

class AdminOrderService {
  adminOrderRepository = new AdminOrderRepository(Orders, Items);

  findAdminOrder = async () => {
    try {
      const findAdminOrder = await this.adminOrderRepository.findAdminOrder();
      const adminOrder = findAdminOrder.map((data) => {
        return {
          orderId: data.orderId,
          status: data.status,
          item_name: data.Item.item_name,
        };
      });
      return adminOrder;
    } catch (error) {
      throw error;
    }
  };

  adminOrderStatus = async (orderId, status) => {
    const adminOrderStatus = await this.adminOrderRepository.adminOrderStatus(
      orderId,
      status
    );
    return adminOrderStatus;
  };
}

module.exports = AdminOrderService;
