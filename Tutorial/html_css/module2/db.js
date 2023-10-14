// You have to do an 'npm install mysql2' to get the package
// Documentation in: https://www.npmjs.com/package/mysql2

var mysql = require('mysql2');

var connection = mysql.createConnection({
	host: 'domains.davidson.edu',
	user: 'envstudi_ws',
	password: '5BiE4C*u#@j',
	database: 'envstudi_ws'
});

function connect() {
	connection.connect();
}

function queryCallback(callback) {
	connection.query("SELECT * FROM Student", (error, results, fields) => {
		if (error) throw error;

		console.log(results)
		callback(results);
	});

	// With parameters:
	// "... WHERE name = ?", ['Fernanda'], (error ...)
}

function disconnect() {
	connection.end();
}

// Setup exports to include the external variables/functions
exports.connection = connection;
exports.connect = connect;
exports.queryCallback = queryCallback;
exports.disconnect = disconnect;

// For testing:
// connect()
// queryCallback(r => console.log(r))
// disconnect()