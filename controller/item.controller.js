const ItemService = require('../services/item.service');

class ItemController {
  itemService = new ItemService();

  // findAllItems = async (req, res, next) => {
  //   try {
  //     const items = await this.itemService.findAllItems();
  //     res.status(200).json({ data: items });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).json({ message: '조회 실패' });
  //   };
  // };

	findAllItems = async (req, res, next) => {
		const { page } = req.query
    const perPage = 10
    const startIndex = ((page || 1) -1 ) * perPage
    try {
      const {lastPage, rows} = await this.itemService.findAllItems(perPage, startIndex);
      res.status(200).json({pageInfo : {perPage,lastPage,currentPage: page || 1}, data: rows });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: '조회 실패' });
    };
  };

	findOfficeItem = async (req, res, next) => {
		try {
			const categoryItem = await this.itemService.findOfficeItem();
			res.status(200).json({ data : categoryItem });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: '카테고리 조회 실패' });
    };
	};

  findDesignItem = async (req, res, next) => {
		try {
			const categoryItem = await this.itemService.findDesignItem();
			res.status(200).json({ data : categoryItem });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: '카테고리 조회 실패' });
    };
	};

  findDeveloperItem = async (req, res, next) => {
		try {
			const categoryItem = await this.itemService.findDeveloperItem();
			res.status(200).json({ data : categoryItem });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: '카테고리 조회 실패' });
    };
	};

  findMusicItem = async (req, res, next) => {
		try {
			const categoryItem = await this.itemService.findMusicItem();
			res.status(200).json({ data : categoryItem });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: '카테고리 조회 실패' });
    };
	};

  findSportsItem = async (req, res, next) => {
		try {
			const categoryItem = await this.itemService.findSportsItem();
			res.status(200).json({ data : categoryItem });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: '카테고리 조회 실패' });
    };
	};

	findOneItem = async (req, res, next) => {
		const { id } = req.params
		try {
			const item = await this.itemService.findOneItem(id);
			res.status(200).json({ data : item });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: '상세 조회 실패' });
    };
	};
};

module.exports = ItemController;
