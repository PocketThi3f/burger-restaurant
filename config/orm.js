// Here is the O.R.M. where the functions are written to take inputs and conditions
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for(var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value, column2=value...
	var arr = [];

	for(var key in ob) {
		if(ob.hasProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ';';
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

		// vals is an array of values that we want to save into cols
		// cols are the names of columns we want to insert values into
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += 
	},

	updateOne: function() {
		var queryString = "UPDATE SET WHERE "
	}
}
