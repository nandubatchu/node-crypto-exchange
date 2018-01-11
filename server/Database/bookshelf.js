// DB Config derived from the knexfile
var environment = process.env.NODE_ENV || 'development';
var config = require('../../knexfile.js')[environment];
console.log("Using DB evironment " + environment);

// Setup Knex & Bookshelf with 'registry' pluguin
var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;