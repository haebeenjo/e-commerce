class MemberRepository {
  constructor(MemberModel) {
    this.MemberModel = MemberModel;
  }
  findMemberAll = async () => {
    try {
      const findMemberAll = await this.MemberModel.findAll();

      return findMemberAll;
    } catch (error) {
      throw error;
    }
  };

  blackList = async (email, blacklist) => {
    try {
      if (blacklist === true) {
        const blackList = await this.MemberModel.increment(
          { blacklist: 1 },
          { where: { email } }
        );
        return blackList;
      } else {
        const blackList = await this.MemberModel.decrement(
          { blacklist: 1 },
          { where: { email } }
        );
        return blackList;
      }
    } catch (error) {
      throw error;
    }
  };
}

module.exports = MemberRepository;
