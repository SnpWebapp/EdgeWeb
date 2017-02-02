/**********************************************************F********
 * FILE NAME:	index.js
 * DESCRIPTION:	Javascript to render the index html page.
 *******************************************************************/

var keystone = require('keystone'),
	edge = require('../edge')

/*******************************************************************
 * FUNCTION:	N/A
 * DESCRIPTION: Callback function on all requests of home page.
 * 				Searches for the network relating to the search
 *				query.
 *******************************************************************/

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res)
	var locals = res.locals

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home'
	locals.searchSubmitted = false
	locals.formData = req.query || {}
	locals.user = req.user || {}
	res.user = locals.user

	if (Object.keys(req.query).length !== 0)
	{
		locals.searchSubmitted = true
		locals.searchResults = edge.edgeSearch(locals.formData)
	}

	// Render the view
	view.render('index')
}
