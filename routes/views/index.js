var keystone = require('keystone');
var edge = require('../edge');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.searchSubmitted = false;

	// On POST requests, add the Enquiry item to the database
	view.on('post', function (next) {

		locals.formData = req.body || {};
		locals.searchSubmitted = true;

		locals.searchResults = edge.edgesearch(locals.formData);
		
		next();
	});

	// Render the view
	view.render('index');
};
