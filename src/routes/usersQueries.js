const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database/connections/mysql/mysqlConnection');

// Get all users
router.get('/users-queries', (req, res) => {
	mysqlConnection.query(
		'SELECT id, firstName, lastName, email FROM users WHERE active = ?',
		[1],
		(err, result, fields) => {
			if (!err) {
				res.send(result);
			} else {
				console.error(err);
				res.send({ error: 'Something was wrong, try later' });
			}
		},
	);
});

// Get an specific user
router.get('/users-queries/:userId', (req, res) => {
	const { userId } = req.params;
	mysqlConnection.query(
		'SELECT id, firstName, lastName, email FROM users WHERE active = ? AND id = ?',
		[1, userId],
		(err, result, fields) => {
			if (!err) {
				res.send(
					result.length > 0
						? result[0]
						: { error: `User with id ${userId} was not found` },
				);
			} else {
				console.error(err);
				res.send({ error: 'Something was wrong, try later' });
			}
		},
	);
});

// Add a user
router.post('/users-queries', (req, res) => {
	const { firstName, lastName, email } = req.body;

	mysqlConnection.query(
		'INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)',
		[firstName, lastName, email],
		(err, result, fields) => {
			if (!err) {
				const { insertId } = result;
				res.send({ id: insertId, ...req.body });
			} else {
				console.error(err);
				res.send({ error: 'Something was wrong, try later' });
			}
		},
	);
});

// Update a user
router.put('/users-queries/:userId', (req, res) => {
	const { userId } = req.params;
	const { firstName, lastName, email } = req.body;

	mysqlConnection.query(
		'UPDATE  users SET firstName = ?, lastName =?, email = ? WHERE active = ? AND id = ?',
		[firstName, lastName, email, 1, userId],
		(err, result, fields) => {
			if (!err) {
				const { affectedRows } = result;
				res.send(
					affectedRows != 0
						? { id: userId, ...req.body }
						: { error: `User with id ${userId} was not found` },
				);
			} else {
				console.error(err);
				res.send({ error: 'Something was wrong, try later' });
			}
		},
	);
});

// Delete a user - true deletion

/*
router.delete('/users-queries/:userId', (req, res) => {
	const { userId } = req.params;
	mysqlConnection.query(
		'DELETE FROM users WHERE id = ?',
		[userId],
		(err, result, fields) => {
			if (!err) {
				const { affectedRows } = result;
				res.send(
					affectedRows != 0
						? { status: `User ${userId} Deleted` }
						: { error: `User with id ${userId} was not found` },
				);
			} else {
				console.error(err);
				res.send({ error: 'Something was wrong, try later' });
			}
		},
	);
});
*/

// Delete a user - Just disable it

router.delete('/users-queries/:userId', (req, res) => {
	const { userId } = req.params;
	mysqlConnection.query(
		'UPDATE  users SET active = ? WHERE active = ? AND id = ?',
		[0, 1, userId],
		(err, result, fields) => {
			if (!err) {
				const { affectedRows } = result;
				res.send(
					affectedRows != 0
						? { status: `User ${userId} Deleted` }
						: { error: `User with id ${userId} was not found` },
				);
			} else {
				console.error(err);
				res.send({ error: 'Something was wrong, try later' });
			}
		},
	);
});

module.exports = router;
