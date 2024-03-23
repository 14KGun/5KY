const mongoose = require("mongoose");

const database = mongoose.connection;
database.on("error", console.error.bind(console, "mongoose connection error."));
database.on("open", () => {
  console.log("데이터베이스와 연결되었습니다.");
});
database.on("disconnected", () => {
  console.log("데이터베이스와 연결이 끊어졌습니다. 5초 후 다시 연결합니다.");
  setTimeout(this.connectDatabase, 5000);
});

module.exports.connectDatabase = () => {
  mongoose.connect(
    process.env.USER === "kimgeon"
      ? "mongodb://localhost:27017/skyst"
      : "mongodb://ec2-13-124-193-99.ap-northeast-2.compute.amazonaws.com:27018/skyst",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
module.exports.chatModel = require("./chat.model");
module.exports.historyModel = require("./history.model");
module.exports.userModel = require("./user.model");
