const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: { type: String, required: true },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: "Answer"
  }]
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;