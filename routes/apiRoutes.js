var db = require('../models');
var passport = require('passport');

module.exports = function (app) {
// Update User's Character ID base on character selection
	app.put('/api/user/:character_id', function (req, res) {
		db.User.update({
			character_id: req.params.character_id
		},{
			where: {
				id: req.user.id
			}
		}).then(function (dbUser) {
			console.log(dbUser);
		});
	});

	app.get('/api/character/', function (req, res){
		db.Character.findOne({
			where: {
				id: req.user.character_id
			},
			include: [db.User]
		}).then(function (dbCharacter){
			res.json(dbCharacter);
		});
	});

// Create a new example
// app.post('/api/examples', function (req, res) {
// 	db.Example.create(req.body).then(function (dbExample) {
// 		res.json(dbExample);
// 	});
// });

// Delete an example by id
// app.delete('/api/examples/:id', function (req, res) {
// 	db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
// 		res.json(dbExample);
// 	});
// });
};