const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

class UserCartRepository {
  constructor(cartModel, itemModel, userModel) {
    (this.cartModel = cartModel),
      (this.itemModel = itemModel),
      (this.userModel = userModel);
  }

  createCart = async (userId, itemId) => {
    const result = await this.cartModel.create({
      user_id: userId,
      item_id: itemId,
    });
    return result;
  };

  findCart = async (userId) => {
    const query = `SELECT
    Items.img
    , Items.item_name
    , Items.price
    , Items.itemId
    , Carts.cartId
FROM Carts AS Carts
LEFT OUTER JOIN Items ON Carts.item_id = Items.itemId
WHERE Carts.user_id = ?
ORDER BY Carts.createdAt DESC;
`;
    const result = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: [userId],
    });
    return result;
  };

  deleteCart = async (cartId) => {
    const result = await this.cartModel.destroy({ where: { cartId } });
  };

  deleteUserCart = async (userId) => {
    const result = await this.cartModel.destroy({ where: { user_id: userId } });
  };
}

module.exports = UserCartRepository;
