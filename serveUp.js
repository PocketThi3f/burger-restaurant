// Here is the setup for the main server
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = 1337;

// Static content for the app from the "public directory" in the application directory
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

// Override with POST having a ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log("I am now listening to port: "+PORT);
});
