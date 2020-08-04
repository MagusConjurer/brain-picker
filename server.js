const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here

// //bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.DB_URI || "mongodb://localhost/brainpicker", 
  { useNewUrlParser: true,
    useUnifiedTopology: true });

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//routes
app.use("/api/users", users);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});