var bodyParser = require('body-parser');

module.exports = function(express, config) {
	var app = express();

	app.set('port', process.env.PORT || 3000);
	app.use(bodyParser.json()); // get information from html forms
	app.use(bodyParser.urlencoded({ extended: true }));
	app.all('*', function(req, res, next) {
	   res.header("Access-Control-Allow-Origin", "*");
	   res.header("Access-Control-Allow-Headers", "X-Requested-With");
	   res.header('Access-Control-Allow-Headers', 'Content-Type');
	   next();
	});

	require('./routes.js')(app);

	return app;
};
