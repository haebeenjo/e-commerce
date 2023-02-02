const { Items } = require('../models');

class ItemRepository {
  constructor(ItemsModel) {
    this.itemsModel = ItemsModel;
  }

  findAllItems = async (perPage, startIndex) => {
    const { count, rows } = await this.itemsModel.findAndCountAll({
      order: [['itemId']],
      offset: startIndex,
      limit: perPage,
    });
    const lastPage = Math.ceil(count / perPage)
    return {lastPage, rows}
  };

  findCategoryItem = async (category_id) => {
    const catagory = await this.itemsModel.findAll({ where: { category_id } });
    return catagory;
  };

  findOneItem = async (itemId) => {
    const item = await this.itemsModel.findOne({ where: { itemId } });
    return item;
  };
}

module.exports = ItemRepository;
