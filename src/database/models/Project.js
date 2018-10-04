const Sequelize = require('sequelize');
const sequelizeConnection = require('../../database/connections/sequelize/sequelizeConectionPool');

const Project = sequelizeConnection.define('projects', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	active: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 1,
	},
});

Project.prototype.toJSON = function() {
	const objectResult = Object.assign({}, this.get());
	delete objectResult.active;
	return objectResult;
};

module.exports = Project;
