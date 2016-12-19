var keystone = require('keystone');
var edge = require('../edge');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'article';
	locals.formData = req.query || {};

	// Get article details from database
	locals.article = locals.formData.hasOwnProperty('id') ?
		edge.edgeGetArticle(locals.formData.id) : {};

	// Redirects to home page if article is not found
	if (Object.keys(locals.article).length === 0) {
		res.statusCode = 302;
		res.setHeader('Location', '/');
		res.end();
	}

	view.render('article');
};
