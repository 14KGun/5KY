const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = Schema({
  userIds: { type: [Schema.Types.ObjectId], ref: "User", required: true },
  joinAts: { type: [Date], required: true },
});

module.exports = mongoose.model("Chat", HistorySchema, { timestamps: true });
