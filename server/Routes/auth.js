var knex = require('../Database/knex.js');
module.exports = router = require('express').Router();

router.get('/', function (req, res) {
	res.send("Auth Router working!");
});

// Registration
router.post('/register', function (req, res) {
	res.send("Registrations will begin soon!")
})

// Login/Signin

// Token