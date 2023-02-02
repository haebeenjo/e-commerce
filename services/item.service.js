const ItemRepository = require('../repositories/item.repository');
const { Items } = require('../models');

class ItemService {
  itemRepository = new ItemRepository(Items);

  findAllItems = async (perPage, startIndex) => {
    const items = await this.itemRepository.findAllItems(perPage, startIndex);
		return items;
  };

  findCategoryItem = async (categoryId) => {
    const catagory = await this.itemRepository.findCategoryItem(categoryId);
    return catagory;
  };

  findOneItem = async (itemId) => {
    const item = await this.itemRepository.findOneItem(itemId);
    return item;
  };
};

module.exports = ItemService;