// services/signup.service.js

const UserRepository = require('../repositories/user.repository');

class SignupService {
    userRepository = new UserRepository();

    createUser = async (email, phone_number, hashPassword, name, address) => {
        const createUserData = await this.userRepository.createUser(email, phone_number, hashPassword, name, address);//, point, blacklist

        return{
            userId: createUserData.userId,
            email : createUserData.email,
            phone_number: createUserData.phone_number,
            name: createUserData.name,
            address: createUserData.address,
            createdAt: createUserData.createdAt,
            updatedAt: createUserData.updatedAt,
        };
    }

    findAllUser = async(email) => {
        const findUsesrData = await this.userRepository.findAllUser(email);
        return findUsesrData.map(user => {
            return {
                userId: user.userId,
                email : user.email,
                phone_number: user.phone_number,
                name: user.name,
                address: user.address,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            }
        });
    }

}


module.exports = SignupService;