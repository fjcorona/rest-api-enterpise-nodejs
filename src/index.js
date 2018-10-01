const express = require('express');
const app = express();
const usersQueries = require('./routes/usersQueries');
const usersSequelize = require('./routes/usersSequelize');

// Settings
const PORT = process.env.PORT || 5000;
app.set('port', PORT);

// Middlewares
app.use(express.json());

// Routes
app.use(usersQueries);
app.use(usersSequelize);

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on PORT: ${app.get('port')}`);
});
