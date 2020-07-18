const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: "Question"
  }],
  results: [{
    type: Schema.Types.ObjectId,
    ref: "Result"
  }],
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;