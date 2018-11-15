$(document).ready(function () {

	var API = {
		getMonster: function (monsterId) {
			return $.ajax({
				url: 'api/monster/',
				type: 'GET'
			});
		},
		getCharacter: function (req) {
			return $.ajax({
				url: '/api/character/',
				type: 'GET'
			});
		}
	};
	
	function displayMonster() {
		API.getMonster().then(function (data) {
			var monster = data;
			$('.monster').html(monster.monsterName);
			$('.monsterLife').html(monster.lifePoints);
			$('.monsterAttack').html(monster.attackPoints);
		});
	}

	function displayCharacter() {
		API.getCharacter().then(function (data) {
			console.log(data);
		// 	var character = data;
		// 	$('.character').html(character.characterName);
		// 	$('.characterLife').html(character.lifePoints);
		// 	$('.characterAttack').html(character.attackPoints);
		});
	
	};
	displayCharacter();
	displayMonster();
});





// var monster = {
// 	monsterName:'Demon',
// 	monsterLife: 20,
// 	monsterAttack: 35,
// }

// var character = {
// 	characterName: 'Hunter',
// 	lifePoints: 20,
// 	attackPoints: 25,
// }

// function displayMonster(){
// 	$('.monster').html(monster.monsterName);
// 	$('.monsterLife').html(monster.monsterLife);
// 	$('.monsterAttack').html(monster.monsterAttack);
// }

// function displayCharacter(){
// 	$('.character').html(character.characterName);
// 	$('.characterLife').html(character.lifePoints);
// 	$('.characterAttack').html(character.attackPoints);
// }

// function playGame(){
// 	if (character.attackPoints > monster.monsterLife){
// 		$('.result').html('You Win!');
// 	} else {
// 		$('.result').html('You Lose!');
// 	}
// }

// $('body').on('click', '#attackBtn', playGame);;