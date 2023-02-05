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

  blackList = async (req, res, next) => {
    try {
      const { email, blacklist } = req.body;
      const blackList = await this.memberService.blackList(email, blacklist);

      res.status(201).json({ message: "블랙리스트 수정이 완료되었습니다." });
    } catch (error) {
      res.status(400).json({ errorMessage: error.message });
    }
  };
}

module.exports = MemberController;
