
const jwt = require('jsonwebtoken');

const { Users } = require('../models');

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res
      .status(401)
      .send({
        errorMessage: '로그인 후 이용해 주세요.',
      })
      .redirect('/api/login');
    return;
  }

  try {
    const { userId } = jwt.verify(token, process.env.SECRET_KEY);
    
    const id = userId.userId;

    Users.findByPk(id).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    res.status(401).send({
      errorMessage: '로그인을 다시 진행해 주세요.',
    });
  }
};
