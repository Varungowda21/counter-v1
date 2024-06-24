const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const counterSchema = new Schema({
  count: Number,
});
const Counter = new model("Counter", counterSchema);
module.exports = Counter;
