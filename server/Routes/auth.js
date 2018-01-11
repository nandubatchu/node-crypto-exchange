module.exports = router = require('express').Router();

// Requirements
var bookshelf = require('../Database/bookshelf.js');

// Controllers
var users = require('../Controllers/users.js');
var tokens = require('../Controllers/tokens.js');

// Routes
router.get('/', function (req, res) {
	res.send("Auth Router working!");
});

// Registration route
router.post('/register', function (req, res) {
	console.log("Registration route");

	if(!req.body.email || !req.body.password) return res.status(400).json({
		message: "Both email and password are required."
	});

	users.signup(req.body.email, req.body.password)
			.then(function (user) {
				if(user) {
					res.json({token: tokens.generateToken(user.get('id'))});
				} else {
					res.status(403).json({ message: 'error creating account' });
				}
			})
			.catch(function () {
				res.status(403).json({ message: 'error creating account' });
			})
});


// Login/Signin route