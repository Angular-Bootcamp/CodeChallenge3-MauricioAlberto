var express = require('express');
var config 		= require('./config/env/development.js');

var configMongoose = require('./config/mongoose')(config);
var app = require('./config/express')(express, config);

app.listen(process.env.PORT, function(){
console.log(`
\x1b[34m*================================================================*
\x1b[32m*                    Running api                                 *
\x1b[34m*================================================================*
	`);
	 console.log('\x1b[36m%s: \x1b[0m' + process.env.NODE_ENV, "NODE_ENV");
	 console.log('\x1b[36m%s: \x1b[0m' + process.env.PORT, "PORT");
	 console.log('\x1b[36m%s: \x1b[0m' + process.env.COMMAND_SUPERVISORD, "COMMAND_SUPERVISORD");
	 console.log(`\x1b[34m*----------------------------------------------------------------*`);
});

module.exports = app;
