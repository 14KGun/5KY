const express = require("express");
const authGuard = require("../middlewares/authGuard");
const wrapAsyncController = require("../modules/wrapAsyncController");
const { historyModel } = require("../modules/models");
const router = express.Router();

/**
 * @swagger
 *  /history/byMe:
 *    get:
 *      summary: 내 히스토리 리스트 조회
 *      tags: [history]
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  required: [_id, joinAts, users]
 *                  properties:
 *                    _id:
 *                      type: string
 *                    joinAts:
 *                      type: array
 *                      items:
 *                        type: string
 *                    isBookmarked:
 *                      type: boolean
 *                    users:
 *                      type: array
 *                      items:
 *                        type: object
 *                        required: [_id, id, name, tags, age, gender]
 *                        properties:
 *                          _id:
 *                            type: string
 *                          id:
 *                            type: string
 *                          name:
 *                            type: string
 *                          tags:
 *                            type: array
 *                            items:
 *                              type: string
 *                          age:
 *                            type: number
 *                          gender:
 *                            type: string
 *                            enum: [male, female, unknown]
 */
router.get(
  "/byMe",
  authGuard,
  wrapAsyncController(async (req, res) => {
    const historys = await historyModel
      .find({
        userIds: { $elemMatch: { $eq: req.user._id } },
      })
      .populate("userIds");
    res.json(
      historys.map((history) => ({
        _id: history._id,
        joinAts: history.joinAts,
        isBookmarked: history.isBookmarked,
        users: history.userIds.map((user) => ({
          _id: user._id,
          id: user.id,
          name: user.name,
          tags: user.tags,
          age: user.age,
          gender: user.gender,
        })),
      }))
    );
  })
);

/**
 * @swagger
 *  /history/byId/{id}:
 *    get:
 *      summary: 히스토리 정보 조회
 *      tags: [history]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                required: [_id, joinAts, users]
 *                properties:
 *                  _id:
 *                    type: string
 *                  joinAts:
 *                    type: array
 *                    items:
 *                      type: string
 *                  isBookmarked:
 *                    type: boolean
 *                  users:
 *                    type: array
 *                    items:
 *                      type: object
 *                      required: [_id, id, name, tags, age, gender]
 *                      properties:
 *                        _id:
 *                          type: string
 *                        id:
 *                          type: string
 *                        name:
 *                          type: string
 *                        tags:
 *                          type: array
 *                          items:
 *                            type: string
 *                        age:
 *                          type: number
 *                        gender:
 *                          type: string
 *                          enum: [male, female, unknown]
 */
router.get(
  "/byId/:id",
  authGuard,
  wrapAsyncController(async (req, res) => {
    const history = await historyModel
      .findOne({
        $and: [
          { userIds: { $elemMatch: { $eq: req.user._id } } },
          { _id: req.params.id },
        ],
      })
      .populate("userIds");
    res.json({
      _id: history._id,
      joinAts: history.joinAts,
      isBookmarked: history.isBookmarked,
      users: history.userIds.map((user) => ({
        _id: user._id,
        id: user.id,
        name: user.name,
        tags: user.tags,
        age: user.age,
        gender: user.gender,
      })),
    });
  })
);

module.exports = router;
