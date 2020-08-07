var db = require("../models");

module.exports = {
  findAllQuizzes: function(req, res) {
    db.Quiz
      .find(req.query)
      .sort({ date: -1 })
      .then(dbQuizzes => res.json(dbQuizzes))
      .catch(err => res.status(422).json(err));
  },
  findOneQuiz: function(req, res) {
    db.Quiz
      .findById(req.params.id)
      .then(dbQuiz => res.json(dbQuiz))
      .catch(err => res.status(422).json(err));
  }
}
