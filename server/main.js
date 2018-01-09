var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3000);


app.get('/', function (req, res) {
	res.send('Express working fine!');
});

app.listen(port, function () {
	console.log("Server listening on port " + port);
});