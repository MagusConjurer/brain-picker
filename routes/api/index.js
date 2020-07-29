const router = require("express").Router();
const userRoutes = require("./user");
const quizRoutes = require("./quiz");

// Book routes
router.use("/user", userRoutes);

// Google Books external API route
router.use("/quiz", quizRoutes)

module.exports = router;