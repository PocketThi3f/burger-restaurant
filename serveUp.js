var express = require("express");

var app = express();

app.get("/", function(req, res) {

});

app.listen(PORT, function() {
  console.log("I am now listening to port: "+PORT);
});
