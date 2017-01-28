var keystone = require('keystone'),
	passport = require('passport'),
	config = require('./oauth.js'),
	User = keystone.list('User'),
	GoogleStrategy = require('passport-google-oauth2').Strategy
	
// Google oauth 2.0
module.exports = passport.use(new GoogleStrategy({
	clientID: config.google.clientID,
	clientSecret: config.google.clientSecret,
	callbackURL: config.google.callbackURL
	},
	function(accessToken, refreshToken, profile, done){
	
		// Find user from database
		User.model.findOne({ oauthID: profile.id }, function (err, user) {
			if (err) {
				console.log(err); // handle errors
			}
			if (!err && user !== null){
				done(null, user);
			} else {
			
				// Add new user to database
				user = new User.model({
					oauthID: profile.id,
					'name.full': profile.displayName,
					email: profile.email,
					password: profile._json.etag,
				})
				user.save(function(err) {
					if (err) { done(null,null) } else { done(null,user) }
				})
			}
		})
	}
))
