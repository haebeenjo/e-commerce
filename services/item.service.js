const ItemRepository = require('../repositories/item.repository');
const { Items } = require('../models');

class ItemService {
  itemRepository = new ItemRepository(Items);

  findAllItems = async (perPage, startIndex) => {
    const items = await this.itemRepository.findAllItems(perPage, startIndex);
    return items;
  };

  findOfficeItem = async () => {
    const catagory = await this.itemRepository.findOfficeItem();
    return catagory;
  };

  findDesignItem = async () => {
    const catagory = await this.itemRepository.findDesignItem();
    return catagory;
  };

  findDeveloperItem = async () => {
    const catagory = await this.itemRepository.findDeveloperItem();
    return catagory;
  };

  findMusicItem = async () => {
    const catagory = await this.itemRepository.findMusicItem();
    return catagory;
  };

  findSportsItem = async () => {
    const catagory = await this.itemRepository.findSportsItem();
    return catagory;
  };

  findOneItem = async (itemId) => {
    const item = await this.itemRepository.findOneItem(itemId);
    return item;
  };
}

module.exports = ItemService;
