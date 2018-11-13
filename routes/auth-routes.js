var passport = require('passport');

module.exports = function (app) {

	///////////AUTH w/ GOOGLE STRATEGY///////////
	app.get('/auth/google', passport.authenticate('google', {
		prompt: 'select_account',
		scope: ['profile']
	}));
	//redirect after google auth
	app.get('/callback',
		passport.authenticate('google', {
			failureRedirect: '/index'
		}),
		function (req, res) {
			//user is now logged in and their info can now be accessed by req.user 
			res.redirect('/character/');
		});

	//////////AUTH w/ LOCAL Strategy////////
	app.post('/login',
		passport.authenticate('local', {
			successRedirect: '/character',
			failureRedirect: '/',
			failureFlash: true
		})
	);

	////////////log user out and close cookie/session////////////
	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

};