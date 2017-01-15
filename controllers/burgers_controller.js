// Here are all the functions that will route the app
var express = require("express");
var router = express.Router();
var cat = require("../models/burgers.js");

router.get("/", function(req, res) {
	res.redirect("/burgers");
});