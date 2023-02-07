class FindUserPointRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  findUserPoint = async (userId) => {
    const result = await this.userModel.findOne({
      where: { userId: userId },
    });
    return result;
  };
}

module.exports = FindUserPointRepository;
