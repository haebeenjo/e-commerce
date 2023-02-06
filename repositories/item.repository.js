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
    const lastPage = Math.ceil(count / perPage);
    return { lastPage, rows };
  };

  findOfficeItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { office: 1 } });
    return catagory;
  };

  findDesignItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { design: 1 } });
    return catagory;
  };

  findDeveloperItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { developer: 1 } });
    return catagory;
  };

  findMusicItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { music: 1 } });
    return catagory;
  };

  findSportsItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { sports: 1 } });
    return catagory;
  };

  findOneItem = async (itemId) => {
    const item = await this.itemsModel.findOne({ where: { itemId } });
    return item;
  };
}

module.exports = ItemRepository;
