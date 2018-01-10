// DB Config derived from the knexfile
var environment = process.env.NODE_ENV || 'development';
var config = require('../../knexfile.js')[environment];

console.log("Using DB evironment " + environment);
module.exports = require('knex')(config);