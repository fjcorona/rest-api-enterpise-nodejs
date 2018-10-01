const express = require('express');
const router = express.Router();
const sequelizeConnection = require('../../database/connections/sequelize/sequelizeConectionPool');

// Get all users
router.get('/users', (req, res) => {
	res.json({});
});

// Get an specific user
router.get('/users/:userId', (req, res) => {
	res.json({});
});

// Add a user
router.post('/users', (req, res) => {
	res.json({});
});

// Update a user
router.put('/users/:userId', (req, res) => {
	res.json({});
});

// Delete a user - true deletion

router.delete('/users/:userId', (req, res) => {
	res.json({});
});

// Delete a user - Just disable it

/*
router.delete('/users/:userId', (req, res) => {
	res.json({});
});
*/

module.exports = router;
