const { Items } = require('../models');

class ItemsRepository {
  constructor(ItemsModel) {
    this.itemsModel = ItemsModel;
  }

  createItem = async (item_name, price, detail, img, category_id) => {
    const created = await this.itemsModel.create({
      item_name,
      price,
      detail,
      img,
      category_id,
    });
    return created;
  };

  findItemById = async (itemId) => {
    const item = await this.itemsModel.findByPk(itemId);
    return item;
  };

  putItem = async (item) => {
    const updated = await item.save();

    return updated;
  };

  deleteItem = async (itemId) => {
    const destroyed = await this.itemsModel.destroy({ where: { itemId } });
    return destroyed;
  };

  findAllItem = async () => {
    const items = await this.itemsModel.findAll();
    return items;
  };
}

module.exports = ItemsRepository;
