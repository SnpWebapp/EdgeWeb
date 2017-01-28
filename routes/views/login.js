var keystone = require('keystone'),

//
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res)
	var locals = res.locals

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'login'
	locals.signinSubmitted = false
	locals.formData = req.body || {}
	locals.validationErrors = {}

	// On POST requests, add the Enquiry item to the database
	view.on('post', function (next) {

        user = keystone.list('User')
        user.model.find()
            .where('name.last', locals.formData.username)
            .exec(function(err,users){
                console.log(users)
            })
		next()
	})
	
	// Render the view
	view.render('login')
};

