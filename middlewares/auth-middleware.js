const jwt = require('jsonwebtoken');

const { Users } = require('../models');
const { Admin } = require('../models');

let authMiddleware = {
  userMiddleware: (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).send({
        errorMessage: '로그인 후 이용해 주세요.',
      });
      return;
    }

    try {
      const { userId } = jwt.verify(token, process.env.SECRET_KEY);

      const id = userId.userId;

      Users.findByPk(id).then((user) => {
        res.locals.user = userId;
        next();
      });
    } catch (err) {
      res.status(401).send({
        errorMessage: '로그인을 다시 진행해 주세요.',
      });
    }
  },

  adminMiddleware: (req, res, next) => {
    const admin = req.cookies.admin;
    if (!admin) {
      res.status(401).send({
        errorMessage: '로그인 후 이용해 주세요.',
      });
      return;
    }

    try {
      const { adminId } = jwt.verify(admin, process.env.SECRET_KEY);

      const id = adminId.adminId;

      Admin.findByPk(id).then((admin) => {
        res.locals.admin = adminId;
        next();
      });
    } catch (err) {
      res.status(401).send({
        errorMessage: '로그인을 다시 진행해 주세요.',
      });
    }
  },
};

module.exports = authMiddleware;
