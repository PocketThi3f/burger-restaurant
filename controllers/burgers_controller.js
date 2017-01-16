// Here are all the functions that will route the app
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

/*router.get("/", function(req, res) {
	res.redirect("/burgers");
});*/

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = { 
			burgers: data 
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	burger.insertOne([
		"burger_name", "devoured"
	], [
		req.body.burger_name, req.body.devoured
	], function() {
		res.redirect("/");
	});
});

router.put("/:ID", function(req, res) {
	var condition = "ID = "+ req.params.ID;

	console.log("condition", condition);

	burger.updateOne({ 
		devoured: req.body.devoured 
	}, condition, function() {
		res.redirect("/");
	});
});

module.exports = router;