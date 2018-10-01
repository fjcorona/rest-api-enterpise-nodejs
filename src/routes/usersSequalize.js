const express = require('express');
const router = express.Router();
const sequelizeConnection = require('../dbconnections/sequelize/sequelizeConectionPool');

// Get all users
router.get('/users/sequelize', (req, res) => {});

// Get an specific user
router.get('/users/sequelize/:userId', (req, res) => {});

// Add a user
router.post('/users/sequelize', (req, res) => {});

// Update a user
router.put('/users/sequelize/:userId', (req, res) => {});

// Delete a user - true deletion

/*
router.delete('/users/sequelize/:userId', (req, res) => {});
*/

// Delete a user - Just disable it

router.delete('/users/sequelize/:userId', (req, res) => {});

module.exports = router;
