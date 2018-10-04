// Get Models
const User = require('./entities/User');
const Team = require('./entities/Team');
const Project = require('./entities/User');

// Define relationships between Models

// Return Object of Models
const dbModels = {
	User: User,
	Team: Team,
	Project: Project,
};

module.exports = dbModels;
