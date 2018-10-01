const express = require('express');
const router = express.Router();

const User = require('../database/models/User');

// Get all users
router.get('/users', (req, res) => {
	res.send({});
});

// Get an specific user
router.get('/users/:userId', (req, res) => {
	res.send({});
});

// Add a user
router.post('/users', (req, res) => {
	res.send({});
});

// Update a user
router.put('/users/:userId', (req, res) => {
	res.send({});
});

// Delete a user - true deletion

router.delete('/users/:userId', (req, res) => {
	res.send({});
});

// Delete a user - Just disable it

/*
router.delete('/users/:userId', (req, res) => {
	res.send({});
});
*/

module.exports = router;
