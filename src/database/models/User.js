const Sequelize = require('sequelize');
const sequelizeConnection = require('../../database/connections/sequelize/sequelizeConectionPool');

const User = sequelizeConnection.define(
	'users',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		firstName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		/*
		active: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 1,
		},
		*/
	},
	{
		timestamps: false,
	},
);

module.exports = User;
