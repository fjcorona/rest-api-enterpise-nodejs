const Sequelize = require('sequelize');

const {
	database,
	user,
	password,
	host,
} = require('../../../config/mysqlDBConfig');

const dialect = 'mysql';

const sequelizeConectionPool = new Sequelize(database, database, password, {
	host: host,
	dialect: dialect,
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

module.exports = sequelizeConectionPool;
