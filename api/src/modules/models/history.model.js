const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = Schema(
  {
    userIds: { type: [Schema.Types.ObjectId], ref: "User", required: true },
    joinAts: { type: [Date], required: true },
    isBookmarked: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", HistorySchema);
