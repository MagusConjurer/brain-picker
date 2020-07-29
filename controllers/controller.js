var express = require("express");
var router = express.Router();
var db = require("../models");

// Default route
router.get("/", function(req, res) {
  // Load main page

})

router.get("/quiz/:id", function(req, res) {
  // Return data for given quiz

})

router.get("/result/:id", function(req, res) {
  // Return data for given result
  
})
