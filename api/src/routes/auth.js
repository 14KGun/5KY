const express = require("express");
const router = express.Router();

/**
 * @swagger
 *  /:
 *    post:
 *      description: 로그인
 *      tags: [auth]
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: category
 *          required: false
 *          schema:
 *            type: integer
 *            description: 카테고리
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */
router.post("/", (req, res) => {
  console.log("POST /");
  res.send("POST /");
});

/**
 * @swagger
 *  /:
 *    delete:
 *      description: 로그아웃
 *      tags: [auth]
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */
router.delete("/", (req, res) => {
  res.send("Success");
});

module.exports = router;
