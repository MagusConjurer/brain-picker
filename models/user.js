const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  results: [{
    type: Schema.Types.ObjectId,
    ref: "Result"
  }],
  quizzes: [{
    type: Schema.Types.ObjectId,
    ref: "Quiz"
  }]
});

const User = mongoose.model("users", UserSchema);

module.exports = User;