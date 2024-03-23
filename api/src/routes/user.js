const express = require("express");
const userModel = require("../modules/models/user.model");
const authGuard = require("../middlewares/authGuard");
const wrapAsyncController = require("../modules/wrapAsyncController");
const router = express.Router();

const locationRecord = {};

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
 *                required: [_id, id, name, tags, age, gender]
 *                properties:
 *                  _id:
 *                    type: string
 *                  id:
 *                    type: string
 *                  name:
 *                    type: string
 *                  tags:
 *                    type: array
 *                    items:
 *                      type: string
 *                  age:
 *                    type: number
 *                  gender:
 *                    type: string
 *                    enum: [male, female]
 *                  location:
 *                    type: object
 *                    required: [latitude, longitude]
 *                    properties:
 *                      latitude:
 *                        type: number
 *                      longitude:
 *                        type: number
 */
router.get(
  "/byMe",
  authGuard,
  wrapAsyncController(async (req, res) => {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      res.status(404).send("Not Found");
      return;
    }
    res.json({
      _id: user._id,
      id: user.id,
      name: user.name,
      tags: user.tags,
      age: user.age,
      gender: user.gender,
    });
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
 *    get:
 *      summary: 내 위치 정보 조회
 *      tags: [user/location]
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required: [latitude, longitude]
 *                properties:
 *                  latitude:
 *                    type: number
 *                  longitude:
 *                    type: number
 */
router.get(
  "/location/byMe",
  authGuard,
  wrapAsyncController(async (req, res) => {
    const location = locationRecord[req.user._id.toString()];
    if (!location) {
      res.status(404).send("Not Found");
      return;
    }
    res.send(location);
  })
);

/**
 * @swagger
 *  /user/location/byMe:
 *    put:
 *      summary: 내 위치 정보 업데이트
 *      tags: [user/location]
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
  authGuard,
  wrapAsyncController(async (req, res) => {
    if (
      typeof req.body.latitude !== "number" ||
      typeof req.body.longitude !== "number"
    ) {
      res.status(400).send("Bad Request");
      return;
    }
    locationRecord[req.user._id.toString()] = {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };
    res.send(req.user._id);
  })
);

module.exports = router;
