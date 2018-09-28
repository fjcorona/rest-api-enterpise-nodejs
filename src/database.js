const mysql = require('mysql');
const mysqlDBConfig = require('../config/mysqlDBConfig');

const mysqlConnection = mysql.createConnection({
	...mysqlDBConfig,
	multipleStatements: true,
});

mysqlConnection.connect(err => {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log('DB is connected');
	}
});

module.exports = mysqlConnection;
