const express = require('express');
const router = express.Router();

const { Project } = require('../database/models/dbModels');

// Get all projects
router.get('/projects', (req, res) => {
	Project.findAll({ where: { active: 1 } })
		.then(projects => {
			res.send(projects);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Get an specific project
router.get('/projects/:projectId', (req, res) => {
	const { projectId } = req.params;

	Project.findOne({ where: { id: parseInt(projectId, 10), active: 1 } })
		.then(project => {
			res.send(
				project != null
					? project
					: { error: `Project with id ${projectId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Add a project
router.post('/projects', (req, res) => {
	Project.create({ ...req.body })
		.then(project => {
			res.send(project);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Update a project
router.put('/projects/:projectId', (req, res) => {
	const { projectId } = req.params;

	Project.update(
		{ ...req.body },
		{ where: { id: parseInt(projectId, 10), active: 1 } },
	)
		.then(project => {
			const affectedRows = project[0];
			res.send(
				affectedRows != 0
					? { id: parseInt(projectId, 10), ...req.body }
					: { error: `Project with id ${projectId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Delete a project
router.delete('/projects/:projectId', (req, res) => {
	const { projectId } = req.params;

	Project.update(
		{ active: 0 },
		{ where: { id: parseInt(projectId, 10), active: 1 } },
	)
		.then(project => {
			const affectedRows = project[0];
			res.send(
				affectedRows != 0
					? { status: `Project ${projectId} was deleted.` }
					: { error: `Project with id ${projectId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

module.exports = router;
