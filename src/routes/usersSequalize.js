const express = require('express');
const router = express.Router();
const sequelizeConnection = require('../dbconnections/sequelize/sequelizeConectionPool');

// Get all users
router.get('/users-sequelize', (req, res) => {
	res.json({});
});

// Get an specific user
router.get('/users-sequelize/:userId', (req, res) => {
	res.json({});
});

// Add a user
router.post('/users-sequelize', (req, res) => {
	res.json({});
});

// Update a user
router.put('/users-sequelize/:userId', (req, res) => {
	res.json({});
});

// Delete a user - true deletion

/*
router.delete('/users-sequelize/:userId', (req, res) => {
	res.json({});
});
*/

// Delete a user - Just disable it

router.delete('/users-sequelize/:userId', (req, res) => {
	res.json({});
});

module.exports = router;
