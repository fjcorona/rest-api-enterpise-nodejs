const express = require('express');
const app = express();

// Settings
const PORT = process.env.PORT || 5000;
app.set('port', PORT);

// Middlewares
app.use(express.json());

// Routes

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on PORT: ${app.get('port')}`);
});
