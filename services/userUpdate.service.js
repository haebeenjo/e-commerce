const UserRepository = require('../repositories/user.repository');

class userUpdateService{
    userRepository = new UserRepository();
}




module.exports = userUpdateService;