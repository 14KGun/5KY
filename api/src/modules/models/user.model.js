const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishSchema = Schema(
  {
    minAge: { type: Number, required: true },
    maxAge: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
  },
  { timestamps: true }
);

const userSchema = Schema(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    tags: { type: [String], required: true, default: [] },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    friend: { type: wishSchema, required: false },
    lover: { type: wishSchema, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
