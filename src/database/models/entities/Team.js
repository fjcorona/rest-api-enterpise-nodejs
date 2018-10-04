module.exports = (Sequelize, sequelizeConnection) => {
	const Team = sequelizeConnection.define('teams', {
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

	Team.prototype.toJSON = function() {
		const objectResult = Object.assign({}, this.get());
		delete objectResult.active;
		return objectResult;
	};

	return Team;
};
