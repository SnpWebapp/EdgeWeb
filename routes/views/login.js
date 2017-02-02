/**********************************************************F********
 * FILE NAME:	login.js
 * DESCRIPTION:	Javascript to render the "login" html page.
 *******************************************************************/

var keystone = require('keystone')

/*******************************************************************
 * FUNCTION:	N/A
 * DESCRIPTION: Callback function on GET requests of "login" page.
 * 				Signs in the user and creates a new user entry in
 *				the database if it does not yet exist.
 *******************************************************************/

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res)
	var locals = res.locals

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'login'
	locals.signinSubmitted = false
	locals.formData = req.body || {}
	locals.validationErrors = {}
	locals.user = req.user || {}
	res.user = locals.user

	// Render the view
	view.render('login')
};

