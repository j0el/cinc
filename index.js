const { OPENDATA_API_KEY } = require('./config.js');

//check on portal.js

var client = new CKAN.Client('https://data.ca.gov/', 'OPENDATA_API_KEY');

// If your portal disallows POST requests (note: limited support in browser module)
//client.requestType = 'GET';
