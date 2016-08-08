var mongoose = require('mongoose');

/* ===========================================================================
	controller
============================================================================*/
var controller = {
	index: 		require('../app/controllers/IndexController.js')
}

module.exports = function(router) {
	// Site routers
	router.get('/api/v1/pokemon/', controller.index.index);
};
