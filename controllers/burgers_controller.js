// Here are all the functions that will route the app
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req, res) {
	burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function() {
		res.redirect("/burgers");
	});
});

router.put("/burgers/update/:ID", function(req, res) {
	var condition = "ID = "+ req.params.ID;

	console.log("condition", condition);

	cat.update({ burger_name: req.body.burger_name }, condition, function() {
		res.redirect("/burgers");
	});
});

module.exports = router;