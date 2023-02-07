class FindUserPointRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  findUserPoint = async (userId) => {
    const result = await this.userModel.findOne({
      where: { userId: userId },
      attributes: ['point'],
    });
    return result;
  };
}

module.exports = FindUserPointRepository;
