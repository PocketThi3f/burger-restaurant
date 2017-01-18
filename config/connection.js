/*Here is where the user is going to make the connection to the mySQL database
and the export made by the ORM */
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 1337,
	host: "localhost",
	user: "root",
	password: "password",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.error("Sorry, error " + err.stack);
		return;
	}
	console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;
