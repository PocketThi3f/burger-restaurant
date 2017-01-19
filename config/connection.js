/*Here is where the user is going to make the connection to the mySQL database
and the export made by the ORM */
var mysql = require("mysql");
var connection;
console.log(process.env.JAWSDB_ROSE_URL);

if(process.env.JAWSDB_ROSE_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_ROSE_URL);
  console.log("I am Jaws");
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
  console.log("the issue");
}

connection.connect(function(err) {
	if (err) {
		console.error("Sorry: " + err.stack);
		return;
	}
	console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;
