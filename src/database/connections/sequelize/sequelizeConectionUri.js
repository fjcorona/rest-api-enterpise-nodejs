const Sequelize = require('sequelize');

const {
	database,
	user,
	password,
	host,
} = require('../../config/mysqlDBConfig');

const dialect = 'mysql';

const sequelizeConection = new Sequelize(
	`${dialect}://${user}:${password}@${host}/${database}`,
);

sequelizeConection
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

module.exports = sequelizeConection;
