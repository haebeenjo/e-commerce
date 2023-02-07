const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userUpdateService = require('../services/userUpdate.service');
const { Users } = require('../models');

class userUpdateController {
  userUpdateService = new userUpdateService();

  putUserUpdate = async (req, res, next) => {
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

    const userId = res.locals.user.userId;
    let body = req.body;

    const user = await Users.findOne({ where: { userId: userId } });
    if (!user) {
      return res.status(404).send({
        message: 'User not found',
        status: 'fail',
      });
    }
    if (
      !body.name ||
      !body.address ||
      !body.phone_number ||
      !body.currentPassword ||
      !body.newPassword ||
      !body.confirmedPassword
    ) {
      return res.status(400).send({
        message: 'null?',
        status: 'fail',
      });
    }

    const currentPasswordHash = crypto
      .createHash('sha512')
      .update(body.currentPassword)
      .digest('hex');
    if (currentPasswordHash !== user.password) {
      return res.status(400).send({
        message: 'Incorrect current password',
        status: 'fail',
      });
    }

    if (body.newPassword == body.currentPassword && body.newPassword) {
      return res.status(400).send({
        message: 'New password has no change',
        status: 'fail',
      });
    }

    if (body.newPassword !== body.confirmedPassword && body.newPassword) {
      return res.status(400).send({
        message: 'New password and confirmed password do not match',
        status: 'fail',
      });
    }

    const hashedPassword = crypto
      .createHash('sha512')
      .update(body.newPassword)
      .digest('hex');

    Users.update(
      {
        name: body.name,
        address: body.address,
        phone_number: body.phone_number,
        password: hashedPassword,
      },

      {
        where: { userId: userId },
      }
    )

      .then((num) => {
        if (num == 1) {
          res.send({
            message: 'UserInfo was updated successfully.',
            status: 'success',
          });
        } else {
          res.send({
            message: 'Data was not found or req.body is empty!',
            status: 'fail',
          });
        }
      })
      .catch((err) => {
        res.send({
          message: 'Error updating UserInfo',
          status: 'fail',
        });
        console.log(err);
      });
  };
}

module.exports = userUpdateController;
