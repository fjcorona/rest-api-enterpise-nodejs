const express = require('express');
const router = express.Router();

// Import Team from Models
const { Team } = require('../database/models/Models');

// Get all teams
router.get('/teams', (req, res) => {
	Team.findAll({ where: { active: 1 } })
		.then(teams => {
			res.send(teams);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Get an specific team
router.get('/teams/:teamId', (req, res) => {
	const { teamId } = req.params;

	Team.findOne({ where: { id: parseInt(teamId, 10), active: 1 } })
		.then(team => {
			res.send(
				team != null
					? team
					: { error: `Team with id ${teamId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Add a team
router.post('/teams', (req, res) => {
	Team.create({ ...req.body })
		.then(team => {
			res.send(team);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Update a team
router.put('/teams/:teamId', (req, res) => {
	const { teamId } = req.params;

	Team.update(
		{ ...req.body },
		{ where: { id: parseInt(teamId, 10), active: 1 } },
	)
		.then(team => {
			const affectedRows = team[0];
			res.send(
				affectedRows != 0
					? { id: parseInt(teamId, 10), ...req.body }
					: { error: `Team with id ${teamId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Delete a team
router.delete('/teams/:teamId', (req, res) => {
	const { teamId } = req.params;

	Team.update(
		{ active: 0 },
		{ where: { id: parseInt(teamId, 10), active: 1 } },
	)
		.then(team => {
			const affectedRows = team[0];
			res.send(
				affectedRows != 0
					? { status: `Team ${teamId} was deleted.` }
					: { error: `Team with id ${teamId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

module.exports = router;
