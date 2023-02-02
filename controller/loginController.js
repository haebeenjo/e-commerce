// controllers/login.controller.js
const crypto = require('crypto');
const LoginService = require('../services/loginService');

class LoginController {
  loginService = new LoginService();

  postLogin = async (req, res, next) => {
      try {
        const { email, password } = req.body;
        const hashPassword = crypto.createHash('sha512').update(req.body.password).digest('hex');//(req.body.password + 10)
        const userId = await this.loginService.findOne(email, hashPassword);
  
        const token = await this.loginService.issueToken(userId);
        res.cookie('token', token['token']);
        res.status(200).json({
          result: 'success',
          token: token,
          userId: userId,
        });
        
      } catch (error) {
        console.log(error)
        
      }
    

    
  };
}

module.exports = LoginController;
//https://fierycoding.tistory.com/11 crypto.createHash('sha512') 설명