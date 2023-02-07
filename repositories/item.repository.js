const { Items } = require('../models');

class ItemRepository {
  constructor(ItemsModel) {
    this.itemsModel = ItemsModel;
  }

  findAllItems = async (perPage, startIndex) => {
    const { count, rows } = await this.itemsModel.findAndCountAll({
      order: [['itemId', 'desc']] ,
      offset: startIndex,
      limit: perPage,
    });
    const lastPage = Math.ceil(count / perPage);
    return { lastPage, rows };
  };

  findOfficeItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { office: 1 } , order: [['itemId', 'desc']] });
    return catagory;
  };

  findDesignItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { design: 1 }, order: [['itemId', 'desc']]  });
    return catagory;
  };

  findDeveloperItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { developer: 1 }, order: [['itemId', 'desc']]  });
    return catagory;
  };

  findMusicItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { music: 1 } , order: [['itemId', 'desc']] });
    return catagory;
  };

  findSportsItem = async () => {
    const catagory = await this.itemsModel.findAll({ where: { sports: 1 }, order: [['itemId', 'desc']]  });
    return catagory;
  };

  findOneItem = async (itemId) => {
    const item = await this.itemsModel.findOne({ where: { itemId }});
    return item;
  };
}

module.exports = ItemRepository;
