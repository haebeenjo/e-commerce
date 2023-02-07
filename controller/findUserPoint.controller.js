const FindUserPointService = require('../services/findUserPoint.service');

class FindUserPointController {
  findUserPointService = new FindUserPointService();

  findUserPoint = async (req, res) => {
    const userId = res.locals.user.userId;
    const userPoint = await this.findUserPointService.findUserPoint(userId);

    res.json({ userPoint });
  };
}

module.exports = FindUserPointController;
