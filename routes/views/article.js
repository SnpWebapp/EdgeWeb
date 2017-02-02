/**********************************************************F********
 * FILE NAME:	article.js
 * DESCRIPTION:	Javascript to render the "article" html page.
 *******************************************************************/

var keystone = require('keystone'),
	edge = require('../edge')

/*******************************************************************
 * FUNCTION:	N/A
 * DESCRIPTION: Callback function on all requests of "article" page.
 * 				Queries database for the relevant article and
 *				displays it. Allows user to post comments on the
 *				article.
 *******************************************************************/

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res)
	var locals = res.locals

	// Set locals
	locals.section = 'article'
	locals.user = req.user || {}
	locals.formData = req.query || {}
	res.user = locals.user
	
	// Get article details from database
	locals.article = locals.formData.hasOwnProperty('id') ?
		edge.edgeGetArticle(locals.formData.id) : {}

	// Redirects to home page if article is not found
	if (Object.keys(locals.article).length === 0) {
		res.redirect('/#')
	}

	// On POST requests, add the Comment item to the database
	view.on('post', function (next) {

		if (Object.keys(locals.user).length === 0) {
			req.flash('error','Please sign in')
		}
		if (Object.keys(req.body.comment).length === 0) {
			req.flash('error','Cannot post an empty comment')
		}
		next()
	})

	view.render('article')
};
