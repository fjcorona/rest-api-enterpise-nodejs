const express = require('express');
const router = express.Router();

const User = require('../database/models/User');

// Get all users
router.get('/users', (req, res) => {
	User.findAll({
		where: {
			active: 1,
		},
	})
		.then(users => {
			res.send(users);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Get an specific user
router.get('/users/:userId', (req, res) => {
	const { userId } = req.params;

	User.findOne({
		where: {
			id: userId,
			active: 1,
		},
	})
		.then(user => {
			res.send(
				user != null
					? user
					: { error: `User with id ${userId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Add a user
router.post('/users', (req, res) => {
	User.create({
		...req.body,
	})
		.then(user => {
			res.send(user);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Update a user
router.put('/users/:userId', (req, res) => {
	const { userId } = req.params;

	User.update(
		{ ...req.body },
		{
			where: {
				id: userId,
				active: 1,
			},
		},
	)
		.then(user => {
			const affectedRows = user[0];
			res.send(
				affectedRows != 0
					? { id: userId, ...req.body }
					: { error: `User with id ${userId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

// Delete a user
router.delete('/users/:userId', (req, res) => {
	const { userId } = req.params;

	User.update(
		{ active: 0 },
		{
			where: {
				id: userId,
				active: 1,
			},
		},
	)
		.then(user => {
			const affectedRows = user[0];
			res.send(
				affectedRows != 0
					? { status: `User ${userId} was deleted.` }
					: { error: `User with id ${userId} was not found.` },
			);
		})
		.catch(err => {
			console.error(err);
			res.send({ error: 'Something was wrong, try later.' });
		});
});

module.exports = router;
