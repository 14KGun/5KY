const express = require("express");
const router = express.Router();

/**
 * @swagger
 *  /byMe:
 *    get:
 *      summary: 내 히스토리 리스트 조회
 *      tags: [history(X)]
 *      parameters:
 *        - in: body
 *          name: category
 *          required: false
 *          schema:
 *            type: object
 *            required:
 *              - category
 *            properties:
 *              historyName:
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
 *  /byId/{id}:
 *    get:
 *      summary: 히스토리 정보 조회
 *      tags: [history(X)]
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
 *              historyName:
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

module.exports = router;
