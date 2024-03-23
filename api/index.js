const express = require("express");
const http = require("http");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "나 비밀이야",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api-docs", require("./src/routes/apidocs"));
app.use("/auth", require("./src/routes/auth"));
app.use("/chat", require("./src/routes/chat"));
app.use("/history", require("./src/routes/history"));
app.use("/user", require("./src/routes/user"));

https: http
  .createServer(app)
  .listen(8080, () => console.log("서비스 시작했다"));
