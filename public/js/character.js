$(document).ready(function () {

	var API = {
		updateUser: function (character_id) {
			return $.ajax({
				method: 'PUT',
				url: '/api/user/' + character_id,
			});
		},
		getCharacter: function () {
			return $.ajax({
				url: 'api/character',
				type: 'GET'
			});
		}
	};

	var displayCharacter = function () {
		API.getCharacter().then(function (data) {
			var character = data;
			console.log(character);
		});
	};

	function pickCharacter() {
		var character_id = $(this).data('id');
		console.log(character_id);
		console.log('You clicked me');
		API.updateUser(character_id).then(function (data) {
			console.log('Character ID Updated!');
		});
	}

	$('#characterBtn1, #characterBtn2, #characterBtn3').on('click', pickCharacter);

	$('#test').on('click', displayCharacter);
});