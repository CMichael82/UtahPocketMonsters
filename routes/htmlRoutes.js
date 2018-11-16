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
	// Load index page
	app.get('/', function (req, res) {
		res.render('index');
	});

	//load create character page (only if user is logged in)
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
		res.render('map-test');
	});

	// Load example page and pass in an example by id
	// app.get('/example/:id', function (req, res) {
	// 	db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
	// 		res.render('example', {
	// 			example: dbExample
	// 		});
	// 	});
	// });

	// Render 404 page for any unmatched routes
	app.get('*', function (req, res) {
		res.render('404');
	});
};
