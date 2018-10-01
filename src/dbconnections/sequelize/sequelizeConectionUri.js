const Sequelize = require('sequelize');

const {
	database,
	user,
	password,
	host,
} = require('../../../config/mysqlDBConfig');

const dialect = 'mysql';

const sequelizeConectionPool = new Sequelize(
	`${dialect}://${user}:${password}@${host}/${database}`,
);

module.exports = sequelizeConectionPool;
