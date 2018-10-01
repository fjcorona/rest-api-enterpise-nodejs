const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../database/connections/mysql/mysqlConnection');

// Get all users
router.get('/users', (req, res) => {
	mysqlConnection.query(
		'SELECT user_id id, user_firstname firstname, user_lastname lastname, user_email email FROM users WHERE user_active = ?',
		[1],
		(err, result, fields) => {
			if (!err) {
				res.send(result);
			} else {
				console.error(err);
				res.json({ error: 'Something was wrong, try later' });
			}
		},
	);
});

// Get an specific user
router.get('/users/:userId', (req, res) => {
	const { userId } = req.params;
	mysqlConnection.query(
		'SELECT user_id id, user_firstname firstname, user_lastname lastname, user_email email FROM users WHERE user_active = ? AND user_id = ?',
		[1, userId],
		(err, result, fields) => {
			if (!err) {
				res.json(
					result.length > 0
						? result[0]
						: { error: `User with id ${userId} was not found` },
				);
			} else {
				console.error(err);
				res.json({ error: 'Something was wrong, try later' });
			}
		},
	);
});

// Add a user
router.post('/users', (req, res) => {
	const { firstname, lastname, email } = req.body;

	mysqlConnection.query(
		'INSERT INTO users(user_firstname, user_lastname, user_email) VALUES (?, ?, ?)',
		[firstname, lastname, email],
		(err, result, fields) => {
			if (!err) {
				const { insertId } = result;
				res.json({ id: insertId, ...req.body });
			} else {
				console.error(err);
				res.json({ error: 'Something was wrong, try later' });
			}
		},
	);
});

// Update a user
router.put('/users/:userId', (req, res) => {
	const { userId } = req.params;
	const { firstname, lastname, email } = req.body;

	mysqlConnection.query(
		'UPDATE  users SET user_firstname = ?, user_lastname =?, user_email = ? WHERE user_active = ? AND user_id = ?',
		[firstname, lastname, email, 1, userId],
		(err, result, fields) => {
			if (!err) {
				const { affectedRows } = result;
				res.json(
					affectedRows != 0
						? { id: userId, ...req.body }
						: { error: `User with id ${userId} was not found` },
				);
			} else {
				console.error(err);
				res.json({ error: 'Something was wrong, try later' });
			}
		},
	);
});

// Delete a user - true deletion

/*
router.delete('/users/:userId', (req, res) => {
	const { userId } = req.params;
	mysqlConnection.query(
		'DELETE FROM users WHERE user_id = ?',
		[userId],
		(err, result, fields) => {
			if (!err) {
				const { affectedRows } = result;
				res.json(
					affectedRows != 0
						? { status: `User ${userId} Deleted` }
						: { error: `User with id ${userId} was not found` },
				);
			} else {
				console.error(err);
				res.json({ error: 'Something was wrong, try later' });
			}
		},
	);
});
*/

// Delete a user - Just disable it

router.delete('/users/:userId', (req, res) => {
	const { userId } = req.params;
	mysqlConnection.query(
		'UPDATE  users SET user_active = ? WHERE user_active = ? AND user_id = ?',
		[0, 1, userId],
		(err, result, fields) => {
			if (!err) {
				const { affectedRows } = result;
				res.json(
					affectedRows != 0
						? { status: `User ${userId} Deleted` }
						: { error: `User with id ${userId} was not found` },
				);
			} else {
				console.error(err);
				res.json({ error: 'Something was wrong, try later' });
			}
		},
	);
});

module.exports = router;
