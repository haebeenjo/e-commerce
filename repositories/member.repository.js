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
}

module.exports = MemberRepository;
