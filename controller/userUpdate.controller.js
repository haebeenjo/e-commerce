// controllers/userUpdate.controller.js
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userUpdateService = require("../services/userUpdate.service");
const { Users } = require("../models");

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

    // params에 있는 userId를 db에서 있는지 검색
    const user = await Users.findOne({ where: { userId: userId } });
    if (!user) {
      return res.status(404).send({
        message: "User not found",
        status: "fail",
      });
    }
    // 비번 바꾸면 쓰는 기능들
    if (body.updatePassword) {
      // 바꾸기 전 비번을 db에서 조회/비교
      const currentPasswordHash = crypto
        .createHash("sha512")
        .update(body.currentPassword)
        .digest("hex");
      if (currentPasswordHash !== user.password) {
        return res.status(400).send({
          message: "Incorrect current password",
          status: "fail",
        });
      }

      //입력한 기존 비번과 입력한 새 비번과 비교
      if (body.newPassword == body.currentPassword) {
        return res.status(400).send({
          message: "New password has no change",
          status: "fail",
        });
      }

      // 바꾼 비밀번호와 한번 더 입력한 비번과 비교
      if (body.newPassword !== body.confirmedPassword) {
        return res.status(400).send({
          message: "New password and confirmed password do not match",
          status: "fail",
        });
      }

      // 새 비번 암호화
      const hashedPassword = crypto
        .createHash("sha512")
        .update(body.newPassword)
        .digest("hex");

      // 유저 정보 업데이트
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
      );
    } else {
      Users.update(
        {
          name: body.name,
          address: body.address,
          phone_number: body.phone_number,
        },
        {
          where: { userId: userId },
        }
      )
        .then((num) => {
          if (num == 1) {
            res.send({
              message: "UserInfo was updated successfully.",
              status: "success",
            });
          } else {
            res.send({
              message: "Data was not found or req.body is empty!",
              status: "fail",
            });
          }
        })
        .catch((err) => {
          res.send({
            message: "Error updating UserInfo",
            status: "fail",
          });
          console.log(err);
        });
    }
  };
}

module.exports = userUpdateController;