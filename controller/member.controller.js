const MemberService = require("../services/member.service");

class MemberController {
  memberService = new MemberService();

  findMemberAll = async (req, res, next) => {
    try {
      const member = await this.memberService.findMemberAll();

      res.status(201).json({ data: member });
    } catch (error) {
      res.status(400).json({ errorMessege: error.message });
    }
  };
}

module.exports = MemberController;
