// repositories/admin.repository.js
class AdminRepository {
  constructor(AdminModel) {
    this.AdminModel = AdminModel;
  }

  findOne = async (email, password) => {
    const findAdmin = await this.AdminModel.findOne({
      where: { email: email, password: password },
    });

    return findAdmin;
  };

  // createAdmin = async (
  //   email,
  //   password
  // ) => {
  //   const createAdminData = await Admin.create({
  //     email,
  //     password
  //   });

  //   return createAdminData;
  // };
}

module.exports = AdminRepository;
