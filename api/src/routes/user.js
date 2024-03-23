const express = require("express");
const router = express.Router();

/**
 * @swagger
 *  /user/byMe:
 *    get:
 *      summary: 내 유저 정보 조회 (로그인 한 내 정보 조회)
 *      tags: [user]
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: body
 *          name: category
 *          required: false
 *          schema:
 *            type: object
 *            required:
 *              - category
 *            properties:
 *              userName:
 *                type: string
 *              firstName:
 *                type: string
 *      responses:
 *       200:
 *        description: 로그인 성공
 */
router.get("/byMe", (req, res) => {
  console.log("POST /");
  res.send("POST /");
});

/**
 * @swagger
 *  /user:
 *    post:
 *      summary: 유저 정보 생성 (회원가입)
 *      tags: [user]
 *      produces:
 *      - text/plain
 *      parameters:
 *        - in: body
 *          name: category
 *          required: false
 *          schema:
 *            type: object
 *            required:
 *              - category
 *            properties:
 *              userName:
 *                type: string
 *              firstName:
 *                type: string
 *      responses:
 *       200:
 *        description: 로그인 성공
 */
router.post("/", (req, res) => {
  console.log("POST /");
  res.send("POST /");
});

/**
 * @swagger
 *  /user/byMe:
 *    patch:
 *      summary: 내 유저 정보 업데이트 (위치 정보 수정 등)
 *      tags: [user]
 *      produces:
 *      - text/plain
 *      parameters:
 *        - in: body
 *          name: category
 *          required: false
 *          schema:
 *            type: object
 *            required:
 *              - category
 *            properties:
 *              userName:
 *                type: string
 *              firstName:
 *                type: string
 *      responses:
 *       200:
 *        description: 로그인 성공
 */
router.patch("/byMe", (req, res) => {
  console.log("POST /");
  res.send("POST /");
});

module.exports = router;
