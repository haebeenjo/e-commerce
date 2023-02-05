const adminItemsRepository = require('../repositories/adminitem.repository');

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

  putItems = async (
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
  ) => {
    try {
      console.log("5555555555555555555555555")
      const existItem = await this.adminitemsRepository.findItemById(itemId);

      if (!existItem) {
        return { message: '해당 상품이 존재하지 않습니다.' };
      }
      (existItem.item_name = item_name),
        (existItem.price = price),
        (existItem.detail = detail),
        (existItem.img = img),
        (existItem.item_status = item_status),
        (existItem.office = office),
        (existItem.design = design),
        (existItem.developer = developer),
        (existItem.music = music),
        (existItem.sports = sports);
      console.log(existItem, "0000000000000000000000")
      const putItemData = await this.adminitemsRepository.putItem(existItem);

      return putItemData;
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
