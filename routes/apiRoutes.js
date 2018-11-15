var db = require('../models');
var axios = require('axios');
var states = require('../data/states');

module.exports = function (app) {
	// Update User's Character ID base on character selection
	app.put('/api/user/:characterId', function (req) {
		db.User.update({
			characterId: req.params.characterId
		}, {
			where: {
				id: req.user.id
			}
		}).then(function (dbUser) {
			console.log(dbUser);
		});
	});

	app.get('/api/character/', function (req, res) {
		db.Character.findOne({
			where: {
				id: req.user.characterId
			},
		}).then(function (dbCharacter) {
			res.json(dbCharacter);
		});
	});

	app.get('/api/monster/', function (req, res) {
		db.Monster.findOne({
			where: {
				id: 1
			}
		}).then(function(dbMonster){
			res.json(dbMonster);
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
	app.get('/api/populations/', function (req, res) {
		var url = 'http://api.datausa.io/api/?show=geo&sumlevel=state&required=pop&year=latest';
		axios.get(url)
			.then(data => {
				var result = data.data.data
					.map(state => ({ id: state[1], population: state[2]}))
					.map(state => {
						var result = {};
						var found = states.find(ourState => ourState.id === state.id);
						if (found) {
							result = {
								...found,
								population: state.population
							};
						}
						return result;
					})
					.filter(state => state.name !== undefined);
				res.json(result);
			})
			.catch(error => {
				console.log('error', error);
			});
	});

// Create a new example
// app.post('/api/examples', function (req, res) {
// 	db.Example.create(req.body).then(function (dbExample) {
// 		res.json(dbExample);
// 	});
// });

// Devare an example by id
// app.devare('/api/examples/:id', function (req, res) {
// 	db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
// 		res.json(dbExample);
// 	});
// });
};