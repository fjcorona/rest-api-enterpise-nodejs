const express = require('express');
const router = express.Router();

// Get all users
router.get('/users', (req, res) => {});

// Get an specific user
router.get('/users/:userId', (req, res) => {});

// Add a user
router.post('/users', (req, res) => {});

// Update a user
router.put('/users/:userId', (req, res) => {});

// Delete a user

router.delete('/users/:userId', (req, res) => {});

module.exports = router;
