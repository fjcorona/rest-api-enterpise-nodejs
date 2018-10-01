const express = require('express');
const app = express();
const users = require('./routes/users');
const usersSequalize = require('./routes/usersSequalize');

// Settings
const PORT = process.env.PORT || 5000;
app.set('port', PORT);

// Middlewares
app.use(express.json());

// Routes
app.use(users);
app.use(usersSequalize);

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on PORT: ${app.get('port')}`);
});
