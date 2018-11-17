// var db = require('../models');

//create an authcheck to confirm user is logged in on certain pages. If not, return to home page
var authCheck = function (req, res, next){
	if (!req.user){
		res.redirect('/');
	} else{
		next();
	}
};

module.exports = function (app) {

	// Load home/login page
	app.get('/', function (req, res) {
		res.render('index');
	});

	///Pages that require user to be logged in//
	app.get('/character', authCheck, function (req, res){
		res.render('character', {
			msg: 'Welcome,',
			reqUser: req.user.name
		});
	});

	app.get('/fight', authCheck, function(req, res){
		res.render('fight-test');
	})

	app.get('/map', authCheck, function (req, res){
		res.render('map');
	});

	// Render 404 page for any unmatched routes
	app.get('*', function (req, res) {
		res.render('404');
	});
};
