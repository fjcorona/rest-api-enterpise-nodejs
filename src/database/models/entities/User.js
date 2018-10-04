const Sequelize = require('sequelize');
const sequelizeConnection = require('../../../database/connections/sequelize/sequelizeConectionPool');

const User = sequelizeConnection.define('users', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	teamId: {
		type: Sequelize.INTEGER,
		allowNull: false,
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
	active: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 1,
	},
});

User.prototype.toJSON = function() {
	const objectResult = Object.assign({}, this.get());
	delete objectResult.active;
	return objectResult;
};

module.exports = User;
