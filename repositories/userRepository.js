// repositories/users.repository.js

const { Users } = require("../models");

class UserRepository {

    createUser = async( email, phone_number, hashPassword, name, address, point, blacklist) => {
        const createUserData = await Users.create({ email, phone_number, password:hashPassword, name, address, point, blacklist });

        return createUserData;
    }

    findOne = async(email, hashPassword) => {
        console.log("3")
        const findUser = await Users.findOne({
            where: {email, password:hashPassword}
        });

        return findUser;
    }

    // createUser = async( email, phone_number, password, name, address, point, blacklist) => {
    //     const createUserData = await Users.create({ email, phone_number, password, name, address, point, blacklist });

    //     return createUserData;
    // }
    // findOne = async(email, password) => {
    //     console.log("3")
    //     const findUser = await Users.findOne({
    //         where: {email, password}
    //     });

    //     return findUser;
    // }
 

    findAllUser = async(email) => {
        const users = await Users.findAll({
            where: { email }
        });
        return users;
    }

}

module.exports = UserRepository;