const adminItemsService = require('../services/adminitem.service');

class adminItemsController {
  adminitemsService = new adminItemsService();

  createItem = async (req, res, next) => {
    try {
      const { item_name, price, detail, office, design, developer, music, sports } = req.body;

      const imgPath = req.file.path;
      const img = imgPath.split('\\')[1];


      const adminId = res.locals.admin_id;

      // if (!adminId) {
      //   return res
      //     .status(401)
      //     .json({ message: '권한이 없습니다.' });
      // }

      if (!item_name || !price || !detail) {
        return res.status(412).json({ message: '빈 항목이 있습니다.' });
      }
      const createItemData = await this.adminitemsService.createItems(
        item_name,
        price,
        detail,
        img,
        office,
        design,
        developer,
        music,
        sports
      );
      res.status(201).json({ data: createItemData });
    } catch (err) {
      console.log('1err:', err);
      res.status(400).json({ message: '상품 등록에 실패하였습니다.' });
    }
  };

  putItem = async (req, res, next) => {
    try {
      const { itemId } = req.params;
      const {
        item_name,
        price,
        detail,
        item_status,
        office,
        design,
        developer,
        music,
        sports,
      } = req.body;
      const imgPath = req.file.path;
      const img = imgPath.split('\\')[1];

      if (item_status !== "판매 중" && item_status !== "일시 품절") {
        return res.status(400).json({ message: '잘못된 요청입니다.' });
      }

      const adminId = res.locals.admin_id;

      // if (!adminId) {
      //   return res
      //     .status(401)
      //     .json({ message: '로그인 후 이용이 가능합니다.' });
      // }

      if (!item_name | !price | !detail) {
        return res.status(412).json({ message: '빈 항목이 있습니다.' });
      }

      const putItemData = await this.adminitemsService.putItems(
        itemId,
        item_name,
        price,
        detail,
        img,
        item_status,
        office,
        design,
        developer,
        music,
        sports
      );

      if (putItemData.message) {
        return res.status(400).json({ message: putItemData.message });
      }

      res.status(201).json({ message: '상품 수정에 성공하였습니다.' });
    } catch (err) {
      console.log('err:', err);
      res.status(400).json({ message: '상품 수정에 실패하였습니다.' });
    }
  };
  deleteItem = async (req, res, next) => {
    try {
      const { itemId } = req.params;
      const adminId = res.locals.admin_id;

      // if (!adminId) {
      //   return res
      //     .status(401)
      //     .json({ message: '로그인 후 이용이 가능합니다.' });
      // }

      const deleteItemData = await this.adminitemsService.deleteItems(itemId);

      res.status(200).json({ message: '상품 삭제에 성공하였습니다.' });
    } catch (err) {
      console.log('cntr: ', err);
      res.status(400).json({ message: '상품 삭제에 실패하였습니다.' });
    }
  };

  getItemlist = async (req, res, next) => {
    try {

      const itemlist = await this.adminitemsService.getItems();

      res.status(200).json({ data: itemlist });
    } catch (err) {
      res.status(500).json({
        errorMessage: err.message,
      });
    }
  };
}

module.exports = adminItemsController;
