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
  },
  findNumUsers: function(req, res) {
    db.User
      .find({})
      .then(dbUsers => {
        let count = [0, 0, 0, 0];
        dbUsers.forEach(user => {
          if(user.results !== null) {
            switch(user.results){
              case 0:
                count[0] += 1;
                break;
              case 1:
                count[1] += 1;
                break;
              case 2:
                count[2] += 1;
                break;
              case 3:
                count[3] += 1;
                break;
            }
          }
        })
        res.json(count)
      })
      .catch(err => res.status(422).json(err));
  }

}
