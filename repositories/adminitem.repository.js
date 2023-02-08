class adminItemsRepository {
  constructor(ItemsModel) {
    this.itemsModel = ItemsModel;
  }
  createItem = async (
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
    const created = await this.itemsModel.create({
      item_name,
      price,
      detail,
      img,
      office,
      design,
      developer,
      music,
      sports,
    });
    return created;
  };

  findItemById = async (itemId) => {
    const item = await this.itemsModel.findByPk(itemId);
    return item;
  };

  putItem = async (itemInfo, itemId) => {
    const updated = await this.itemsModel.update(itemInfo,
      { where: { itemId } });

    return updated;
  };

  deleteItem = async (itemId) => {
    const destroyed = await this.itemsModel.destroy({ where: { itemId } });
    return destroyed;
  };

  findAllItem = async () => {
    const items = await this.itemsModel.findAll({
      order: [['itemId', 'desc']],
    });
    return items;
  };
}

module.exports = adminItemsRepository;
