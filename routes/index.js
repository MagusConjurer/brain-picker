const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const quizRoutes = require("./quiz");

// API Routes
router.use("/api", apiRoutes);

router.use("/quiz", quizRoutes);

// If no API routes are hit, send the built React page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;