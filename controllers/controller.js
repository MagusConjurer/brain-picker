var db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Quiz
      .find(req.query)
      .sort({ date: -1 })
      .then(dbQuizzes => res.json(dbQuizzes))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Quiz
      .findByID(req.query)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  }
}
