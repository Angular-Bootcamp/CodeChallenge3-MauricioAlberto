module.exports = function(config) {

	var mongoose 	= require('mongoose');
	var db			 	= mongoose.connect(config.mongodburi);
	var Pokemon 	= require('../app/models/Pokemon');

	return db;
};
