// services/loginService.js

const jwt = require('jsonwebtoken');

const UserRepository = require('../repositories/userRepository');

class LoginService {
    userRepository = new UserRepository();

    findOne = async(email, hashPassword) => {
        console.log("2")
        const findUser = await this.userRepository.findOne(email, hashPassword);
        console.log(findUser.userId, findUser.hashPassword)
    // findOne = async(email, password) => {
    //   console.log("2")
    //   const findUser = await this.userRepository.findOne(email, password);
      // console.log(findUser.userId, findUser.password)

        return{
            userId: findUser.userId
        }
    }
    issueToken = async(userId) => {
      console.log("2-1")
        const token =jwt.sign({ userId: userId },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
            );
          console.log(token)
        return{
            token: token 
        }
    }

}

module.exports = LoginService;