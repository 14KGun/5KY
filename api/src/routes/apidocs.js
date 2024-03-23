const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const router = express.Router();
router.use(
  swaggerUi.serve,
  swaggerUi.setup(
    swaggereJsdoc({
      swaggerDefinition: {
        openapi: "3.0.0",
        info: {
          version: "1.0.0",
          title: "5KY API Docs",
          description: "날 참고해랏",
        },
        servers: [{ url: "http://ec2-13-124-193-99.ap-northeast-2.compute.amazonaws.com:8081" }, { url: "http://localhost:8080" }],
        basePath: "/",
      },
      apis: ["./src/routes/*.js"], //Swagger 파일 연동
    })
  )
);
module.exports = router;
