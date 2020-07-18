const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  text: { type: String, required: true },
  weights: [Number]
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;