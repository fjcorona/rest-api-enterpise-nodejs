const User = require('./entities/User');
const Team = require('./entities/Team');
const Project = require('./entities/User');

const dbModels = {
	User: User,
	Team: Team,
	Project: Project,
};

module.exports = dbModels;
