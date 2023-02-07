const AdminOrderRepository = require("../repositories/adminOrder.repository");
const { Orders, Items } = require("../models");

class AdminOrderService {
  adminOrderRepository = new AdminOrderRepository(Orders, Items);

  findAdminOrder = async () => {
    try {
      const findAdminOrder = await this.adminOrderRepository.findAdminOrder();
      const adminOrder = findAdminOrder.map((data) => {
        if (data.status != "판매 완료")
          return {
            orderId: data.orderId,
            item_name: data.Item.item_name,
            user_id: data.user_id,
            name: data.name,
            address: data.address,
            phone_number: data.phone_number,
            status: data.status,
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
