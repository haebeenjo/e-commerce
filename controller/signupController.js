// controllers/signupController.js
const crypto = require('crypto');
const SignupService = require('../services/signupService');

class SignupController {
  signupService = new SignupService();
  
  postSignup = async (req, res, next) => {
    try {
      const { email, phone_number, password, name, address} =
        req.body;        

      const re_email = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/;

      if (email.search(re_email) === -1) {
        res.status(412).send({
          errorMessage: 'ID의 형식이 일치하지 않습니다',
        });
        return;
      }

      if (!address) {
        res.status(412).send({
          errorMessage: '주소를 입력해주세요.',
        });
        return;
      }
      if (!password) {
        res.status(412).send({
          errorMessage: '암호를 입력해주세요.',
        });
        return;
      }
      if (!name) {
        res.status(412).send({
          errorMessage: '성함을 입력해주세요.',
        });
        return;
      }
      const user = await this.signupService.findAllUser(email);

      if (user.length) {
        res.status(412).send({
          errorMessage: '중복된 이메일입니다.',
        });
        return;
      }
      const hashPassword = crypto.createHash('sha512').update(req.body.password).digest('hex');

      const createUserData = await this.signupService.createUser(
        email,
        phone_number,
        hashPassword,
        name,
        address
      );
      res.status(200).json({ result: 'success', data: createUserData });
    } catch (err) {
      res.status(400).json({
        errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
      });
    }
  };
}

module.exports = SignupController;
