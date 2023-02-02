const ItemsRepository = require('../repositories/item.repository');

const { Items } = require('../models');

class ItemsService {
  itemsRepository = new ItemsRepository(Items);

  createItems = async (item_name, price, detail, img, categoryId) => {
    const createItemData = await this.itemsRepository.createItem(
      item_name,
      price,
      detail,
      img,
      categoryId
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
    categoryId
  ) => {
    try {
      const existItem = await this.itemsRepository.findItemById(itemId);

      if (!existItem) {
        return { message: '해당 상품이 존재하지 않습니다.' };
      }
      (existItem.item_name = item_name),
        (existItem.price = price),
        (existItem.detail = detail),
        (existItem.img = img),
        (existItem.item_status = item_status),
        (existItem.category_id = categoryId);

      const putItemData = await this.itemsRepository.putItem(existItem);

      return putItemData;
    } catch (err) {
      console.log('err:', err);
    }
  };

  deleteItems = async (item_id) => {
    try {
      const existItem = await this.itemsRepository.findItemById(item_id);

      if (!existItem) {
        return { message: '해당 상품이 존재하지 않습니다.' };
      }
      const deleteData = await this.itemsRepository.deleteItem(item_id);

      return deleteData;
    } catch (err) {
      console.log('service err: ', err);
    }
  };
}

module.exports = ItemsService;
