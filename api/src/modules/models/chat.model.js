const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = Schema(
  {
    content: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    historyId: { type: Schema.Types.ObjectId, ref: "History", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
