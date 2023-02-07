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
}

module.exports = AdminRepository;
