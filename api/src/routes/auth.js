const express = require("express");
const authGuard = require("../middlewares/authGuard");
const wrapAsyncController = require("../modules/wrapAsyncController");
const userModel = require("../modules/models/user.model");
const router = express.Router();

/**
 * @swagger
 *  /auth:
 *    post:
 *      summary: 로그인
 *      tags: [auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required: [id, password]
 *              properties:
 *                id:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                description: 유저 아이디
 *                example: "유저 아이디"
 */
router.post(
  "/",
  wrapAsyncController(async (req, res) => {
    const user = await userModel.findOne({
      id: req.body.id,
      password: req.body.password,
    });
    if (!user) {
      res.status(404).send("Not Found");
      return;
    }
    req.session.user = {
      id: user.id,
      name: user.name,
      age: user.age,
      gender: user.gender,
    };
    await req.session.save();
    res.send(user._id);
  })
);

/**
 * @swagger
 *  /auth:
 *    delete:
 *      summary: 로그아웃
 *      tags: [auth]
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                description: Success
 *                example: "Success"
 */
router.delete(
  "/",
  authGuard,
  wrapAsyncController(async (req, res) => {
    await req.session.destroy();
    res.send("Success");
  })
);

module.exports = router;
