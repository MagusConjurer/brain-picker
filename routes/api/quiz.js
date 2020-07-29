const router = require("express").Router();
const controller = require("../../controller/controller");

// Matches with "/api/books"
router.route("/")
  .get(controller.findAll)

// Matches with "/api/books/:id"
router.route("/:id")
  .get(controller.findOne);

module.exports = router;