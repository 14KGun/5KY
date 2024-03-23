const express = require("express");
const router = express.Router();

/**
 * @swagger
 *  /chat:
 *    post:
 *      summary: 메시지 생성
 *      tags: [chat(X)]
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
 *              chatName:
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
 *  /chat/byHistoryId/{id}:
 *    get:
 *      summary: 히스토리의 메시지 리스트 조회
 *      tags: [chat(X)]
 *      produces:
 *      - text/plain
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *        - in: body
 *          name: category
 *          required: false
 *          schema:
 *            type: object
 *            required:
 *              - category
 *            properties:
 *              chatName:
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

module.exports = router;
