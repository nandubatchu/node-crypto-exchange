// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Authentication Handlers
var jwtHandler = require('./Authentication/jwtHandler.js');

// Initialise the application
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic routes
app.get('/', function (req, res) {
	res.send('Express working fine!');
});

// Auth Routes
var authRouter = require('./Routes/auth.js');
app.use('/api/auth', authRouter);

// API Routes
var apiRouter = require('./Routes/v1.js');
app.use('/api/v1', jwtHandler, apiRouter);


// Server config variables
var port = Number(process.env.PORT || 3000);

// Initialise the server
app.listen(port, function () {
	console.log("Server listening on port " + port);
});