const Sequelize = require('sequelize');

const {
	database,
	user,
	password,
	host,
} = require('../../config/mysqlDBConfig');

const dialect = 'mysql';

const sequelizeConection = new Sequelize(database, user, password, {
	host: host,
	dialect: dialect,
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	define: {
		charset: 'utf8',
		dialectOptions: {
			collate: 'utf8_general_ci',
		},
		timestamps: false,
	},
});

sequelizeConection
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

module.exports = sequelizeConection;
