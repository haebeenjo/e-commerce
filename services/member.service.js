const MemberRepository = require("../repositories/member.repository");
const { Users } = require("../models");

class MemberService {
  memberRepository = new MemberRepository(Users);

  findMemberAll = async () => {
    try {
      const findMemberAll = await this.memberRepository.findMemberAll();
      const member = findMemberAll.map((data) => {
        return {
          email: data.email,
          name: data.name,
          phone_number: data.phone_number,
          address: data.address,
          blacklist: data.blacklist,
        };
      });
      return member;
    } catch (error) {
      throw error;
    }
  };

  blackList = async (email, blacklist) => {
    try {
      const blackList = await this.memberRepository.blackList(email, blacklist);
      return blackList;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = MemberService;
