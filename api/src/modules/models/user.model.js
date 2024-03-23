const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: { type: String, required: true },
    tags: { type: [String], required: true, default: [] },
    age: { type: Number, required: true },
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    locationLatitude: { type: Number, required: false },
    locationLongitude: { type: Number, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
