const Sequelize = require('sequelize');
const sequelizeConnection = require('../../database/connections/sequelize/sequelizeConectionPool');

// Get Models
const User = require('./entities/User')(Sequelize, sequelizeConnection);
const Team = require('./entities/Team')(Sequelize, sequelizeConnection);
const Project = require('./entities/Project')(Sequelize, sequelizeConnection);

// Define relationships between Models

// Return Object of Models
const dbModels = {
	User: User,
	Team: Team,
	Project: Project,
};

module.exports = dbModels;
