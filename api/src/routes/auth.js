const express = require("express");
const router = express.Router();

/**
 * @swagger
 *  /auth:
 *    post:
 *      summary: 로그인
 *      tags: [auth]
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
 *  /auth:
 *    delete:
 *      summary: 로그아웃
 *      tags: [auth]
 *      produces:
 *      - text/plain
 *      responses:
 *       200:
 *        description: 로그아웃 성공
 */
router.delete("/", (req, res) => {
  res.send("Success");
});

module.exports = router;
