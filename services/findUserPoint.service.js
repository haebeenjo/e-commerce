const FindUserPointRepository = require('../repositories/findUserPoint.repository');
const { Users } = require('../models');

class FindUserPointService {
  findUserPointRepository = new FindUserPointRepository(Users);

  findUserPoint = async (userId) => {
    const user = await this.findUserPointRepository.findUserPoint(userId);
    return user;
  };
}

module.exports = FindUserPointService;
