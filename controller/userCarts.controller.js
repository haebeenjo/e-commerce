const UserCartService = require('../services/userCarts.service');

class UserCartController {
  userCartService = new UserCartService();

  createCart = async (req, res) => {
    const userId = res.locals.user.userId;
    const { itemId } = req.body;
    const createCartData = await this.userCartService.createCart(
      userId,
      itemId
    );
    res.status(201).json({ message: '장바구니에 추가되었습니다.' });
  };

  findCart = async (req, res) => {
    const userId = res.locals.user.userId;
    const carts = await this.userCartService.findCart(userId);

    res.status(200).json({ carts: carts });
  };

  deleteCart = async (req, res) => {
    const { itemId } = req.body;
    const carts = await this.userCartService.deleteCart(itemId);
    res.status(200).json({ message: '장바구니에서 삭제되었습니다.' });
  };
}

module.exports = UserCartController;
