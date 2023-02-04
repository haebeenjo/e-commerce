// controllers/userUpdatecontroller.js
const jwt = require("jsonwebtoken")

const userUpdateService = require("../services/userUpdateService");

class userUpdateController {
  userUpdateService = new userUpdateService();

  putUserUpdate = async (req, res, next) => {
    const userId = req.Users.userId;
    const { name, email, password } = req.body;





    }

  };


module.exports = userUpdateController;
