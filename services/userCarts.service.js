const UserCartRepository = require('../repositories/userCarts.repository');
const { Users, Items, Carts } = require('../models');

class UserCartService {
  userCartRepository = new UserCartRepository(Carts, Items, Users);

  createCart = async (userId, itemId) => {
    const createCartData = await this.userCartRepository.createCart(
      userId,
      itemId
    );
    return createCartData;
  };

  findCart = async (userId) => {
    const carts = await this.userCartRepository.findCart(userId);

    carts.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    return carts.map((cart) => {
      return {
        img: cart.img,
        item_name: cart.item_name,
        price: cart.price,
        itemId: cart.itemId,
      };
    });
  };

  deleteCart = async (itemId) => {
    const carts = await this.userCartRepository.deleteCart(itemId);
    return carts;
  };
}

module.exports = UserCartService;
