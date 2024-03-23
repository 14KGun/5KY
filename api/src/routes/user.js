const express = require("express");
const userModel = require("../modules/models/user.model");
const wrapAsyncController = require("../modules/wrapAsyncController");
const router = express.Router();

/**
 * @swagger
 *  /user/byMe:
 *    get:
 *      summary: 내 유저 정보 조회 (로그인 한 내 정보 조회)
 *      tags: [user]
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                description: 유저 아이디
 */
router.get(
  "/byMe",
  wrapAsyncController(async (req, res) => {
    res.send("Success");
  })
);

/**
 * @swagger
 *  /user:
 *    post:
 *      summary: 유저 정보 생성 (회원가입)
 *      tags: [user]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required: [name, tags, age, id, password]
 *              properties:
 *                name:
 *                  type: string
 *                tags:
 *                  type: array
 *                  items:
 *                    type: string
 *                age:
 *                  type: number
 *                gender:
 *                  type: string
 *                  enum: [male, female]
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
    const user = await userModel.create({
      name: req.body.name,
      tags: req.body.tags,
      age: req.body.age,
      gender: req.body.gender,
      id: req.body.id,
      password: req.body.password,
    });
    res.send(user._id);
  })
);

/**
 * @swagger
 *  /user/location/byMe:
 *    put:
 *      summary: 내 위치 정보 업데이트
 *      tags: [user]
 *      produces:
 *      - application/json
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required: [latitude, longitude]
 *              properties:
 *                latitude:
 *                  type: number
 *                longitude:
 *                  type: number
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                description: 유저 아이디
 *                example: "유저 아이디"
 */
router.put(
  "/location/byMe",
  wrapAsyncController(async (req, res) => {
    res.send("Success");
  })
);

module.exports = router;
