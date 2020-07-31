const router = require("express").Router();
//const userRoutes = require("./user");
const quizRoutes = require("./quiz");

// User routes
//router.use("/user", userRoutes);

// Quiz routes
router.use("/quiz", quizRoutes)

module.exports = router;