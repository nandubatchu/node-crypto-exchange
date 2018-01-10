module.exports = router = require('express').Router();

router.get('/', function (req, res) {
	res.send("API Router working!\n" + req.user);
});