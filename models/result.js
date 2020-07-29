const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String }
});

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;