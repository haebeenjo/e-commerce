const adminItemsRepository = require('../repositories/adminItem.repository');

const { Items } = require('../models');

class adminItemsService {
  adminitemsRepository = new adminItemsRepository(Items);

  createItems = async (
    item_name,
    price,
    detail,
    img,
    office,
    design,
    developer,
    music,
    sports
  ) => {
    const createItemData = await this.adminitemsRepository.createItem(
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

    return createItemData;
  };

  putItems = async (itemInfo, itemId) => {
    try {
      const existItem = await this.adminitemsRepository.findItemById(itemId);
      if (!existItem) throw new Error('해당 상품이 존재하지 않습니다.');

      await this.adminitemsRepository.putItem(itemInfo, itemId);

      const putItemData = await this.adminitemsRepository.findItemById(itemId);

      return {
        itemId: putItemData.itemId,
        item_name: putItemData.item_name,
        price: putItemData.price,
        detail: putItemData.detail,
        img: putItemData.img,
        item_status: putItemData.item_status,
        office: putItemData.office,
        design: putItemData.design,
        developer: putItemData.developer,
        music: putItemData.music,
        sports: putItemData.sports
      }

    } catch (err) {
      console.log('err:', err);
    }
  };

  deleteItems = async (item_id) => {
    try {
      const existItem = await this.adminitemsRepository.findItemById(item_id);

      if (!existItem) {
        return { message: '해당 상품이 존재하지 않습니다.' };
      }
      const deleteData = await this.adminitemsRepository.deleteItem(item_id);

      return deleteData;
    } catch (err) {
      console.log('service err: ', err);
    }
  };

  getItems = async () => {
    const items = await this.adminitemsRepository.findAllItem();
    return items;
  };
}

module.exports = adminItemsService;
