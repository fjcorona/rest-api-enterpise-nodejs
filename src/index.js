const express = require('express');
const app = express();
const users = require('./routes/users');
const teams = require('./routes/teams');
const projects = require('./routes/projects');

// Settings
const PORT = process.env.PORT || 5000;
app.set('port', PORT);

// Middlewares
app.use(express.json());

// Routes
app.use(users);
app.use(teams);
app.use(projects);

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on PORT: ${app.get('port')}`);
});
