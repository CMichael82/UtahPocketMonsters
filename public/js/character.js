$(document).ready(function () {

	var API = {
		updateUser: function (characterId) {
			return $.ajax({
				method: 'PUT',
				url: '/api/user/' + characterId,
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
		var characterId = $(this).data('id');
		console.log(characterId);
		console.log('You clicked me');
		API.updateUser(characterId).then(function () {
			console.log('Character ID Updated!');
		});
	}

	$('#characterBtn1, #characterBtn2, #characterBtn3').on('click', pickCharacter);

	$('#keepBtn').on('click', displayCharacter);
});