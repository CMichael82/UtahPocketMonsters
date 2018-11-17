$(document).ready(function () {

	////////GLOBAL VARIABLES///
	var $monsterLife = $('#monsterLife');
	var $characterLife = $('#characterLife');
	var $result = $('.result');
	var $attackBtn = $('#attackBtn');
	var monster;
	var character;
	var API = {
		getMonster: function (monsterId) {
			return $.ajax({
				url: 'api/monster/',
				type: 'GET'
			});
		},
		getCharacter: function () {
			return $.ajax({
				url: '/api/character/',
				type: 'GET'
			});
		}
	};

	/////////////FUNCTIONS////////////////////

	//Get character & monster information from MySQL and display in the DOM////
	function displayOpponets() {
		//Monster Data
		API.getMonster().then(function (data) {
			monster = data;
			console.log(monster);
			$('#monstImage').attr('src', monster.imageUrl);
			$('#monster').html(monster.monsterName);
			$monsterLife.html(monster.lifePoints);
		});
		//Character Data
		API.getCharacter().then(function (data) {
			character = data;
			console.log(character);
			$('#charImage').attr('src', character.imageUrl);
			$('#character').html(character.characterName);
			$characterLife.html(character.lifePoints);
		});
	}

	//Character Clicks Attack Button//
	function characterAttack() {
		console.log('Your Life Points: ' + character.lifePoints);

			//Determine percentage likely to hit opponent//
		var hit = (character.accuracy - monster.defense) / 100;
		console.log('Your Likelihood of a Hit: ' + (hit * 100) + '%');

		//If hit unsuccessful, show a miss//
		if (Math.random() < hit) {
			console.log('You Miss!' + '\n--------------------------\n');
			$result.html('You Missed! <br><br> Try Again?');

			//If hit successful, determine amount of damage//
		} else {
			var characterDamage = character.attackPoints += parseInt(Math.random() * 6);
			$result.html('You Made a ' + characterDamage + ' Point Hit!');
			console.log('Damage to Monster: ' + character.attackPoints);
			monster.lifePoints -= characterDamage;
			console.log('Monster Life Points: ' + monster.lifePoints + '\n--------------------------\n');

			//display change in lifePoints
			scoreboard();

			//determine if Opponent was defeated//
			if (monster.lifePoints <= 0) {
				console.log('You Won!');
				$result.html('You Defeated ' + monster.monsterName);
			} else {
				//If Opponent still alive, allow for their counter-attack
				setTimeout(counterMessage, 2000);
				setTimeout(counterAttack, 5000);
			}
		}
	}

	//let player know the opponent will be attacking
	function counterMessage() {
		$result.html(monster.monsterName + '<br><br> is Launching a Counter Attack!');
		$attackBtn.hide();
	}

	//have opponent attack//
	function counterAttack() {
		//Determine percentage likely to hit opponent//
		var hit = (monster.accuracy - character.defense) / 100;
		console.log('Monster Likelihood of a Hit: ' + (hit * 100) + '%');

		//If hit unsuccessful, show a miss//
		if (Math.random() < hit) {
			console.log('Monster Missed' + '\n--------------------------\n');
			$result.html(monster.monsterName + ' Missed! <br><br> Your Turn.');
			$attackBtn.show();

			//If hit successful, determine amount of damage//
		} else {
			$attackBtn.show();
			var monterDamage = monster.attackPoints += parseInt(Math.random() * 6);
			$result.html("You've taken a " + monterDamage + ' Point Hit!<br><br> Attach Again?');
			console.log('Damage From Monster: ' + monster.attackPoints);
			character.lifePoints -= monterDamage;
			console.log('Character Life Points: ' + character.lifePoints + '\n--------------------------\n');

			//display change in lifePoints
			scoreboard();

			//determine if player was defeated//
			if (character.lifePoints <= 0) {
				console.log('You Lose!')
				$result.html("YOU'VE BEEN DEFEATED!");
			}
		}
	}

	//Update lifepoint in the DOM//
	function scoreboard() {
		$monsterLife.html(monster.lifePoints);
		$characterLife.html(character.lifePoints);
	}

	/////CALL FUNCTIONS/ EVENT LISTENING///////////
	displayOpponets();
	$('body').on('click', '#attackBtn', characterAttack);;
});