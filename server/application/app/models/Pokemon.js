var mongoose = require('mongoose');
var 	Schema = mongoose.Schema;

var pokemon = new Schema({
	id: { type: String },
	name: { type: String },
	species: { type: String },
	type: { type: Array },
	height: { type: String },
	weight: { type: String },
	abilities:{ type: Array },
	//stats:{ type: Array },
	evolution:{ type: Array },
});

mongoose.model('Pokemon', pokemon);
