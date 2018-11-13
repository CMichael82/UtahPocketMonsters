var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var LocalStrategy = require('passport-local');
var db = require('../models');
var keys = require('../config/keys');

module.exports = function (app) {
	// Middleware
	app.use(passport.initialize());
	app.use(passport.session());

	////// Cookies//////
	//get id from current/new user
	passport.serializeUser(function (user, done) {
		console.log('USER ID: ', user.id);
		done(null, user.id);
	});
	//find the user based on the id (step above)
	passport.deserializeUser(function (id, done) {
		db.User.findById(id)
			.then(function (user) {
				done(null, user);
			});
	});

	/////////////////Passport Setup for Google OAuth  Strategy///////////////////
	passport.use(
		new GoogleStrategy({
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret,
			callbackURL: 'http://localhost:3000/callback'
		},
		function (accessToken, refreshToken, profile, done) {
			console.log(profile.displayName, ' is attempting to log in');
			//check if user exists
			db.User.findOne({
				where: {
					email: profile.emails[0].value
				}
			}).then(function (currentUser) {
				if (currentUser) {
					//user already exists
					console.log('Current User Is: ', currentUser.name);
					//user passed into cookie/serializer
					done(null, currentUser);
				} else {
					//create user in db
					db.User.create({
						googleId: profile.id,
						name: profile.displayName,
						email: profile.emails[0].value,
					}).then(function (newUser) {
						console.log(newUser.name, ' created');
						//user passed into cookie/serializer
						done(null, newUser);
					});
				}
			});
		}));

	//////////Passport setup for Local Strategy////////////
	passport.use(new LocalStrategy({
		passReqToCallback : true 
	},
	function (req, username, password, done) {
		var email = req.body.email;
		// console.log('Current User Is: ', username);
		// console.log('Current User Password Is: ', password);
		db.User.findOne({
			where: {
				email: email
			}
		}).then(function (currentUser) {
			if (currentUser) {
				//user already exists
				console.log('Current User Is: ', currentUser);
				//user passed into cookie/serializer
				done(null, currentUser);
			} else {
				// create user in db
				db.User.create({
					name: username,
					password: password,
					email: email
				}).then(function (newUser) {
					console.log(newUser, ' created');
					//user passed into cookie/serializer
					done(null, newUser);
				});
			}
		});
	}));
};