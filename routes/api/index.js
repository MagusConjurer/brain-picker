const router = require("express").Router();
const userRoutes = require("./users");
const quizRoutes = require("./quiz");

// User routes
router.use("/users", userRoutes);

// Quiz routes
router.use("/quiz", quizRoutes)

module.exports = router;