$(document).ready(function () {
	$('.modal').modal();

	$('#registerBtn').on('click', handleNewUser);

	$('#loginBtn').on('click', handleLogin);

});

function handleNewUser(event) {
	var $username = $('#username');
	var $email = $('#email');
	var $password = $('#password');
	event.preventDefault();
	alert("You are adding a user");

	var user = {
		name: $username.val().trim(),
		email: $email.val().trim(),
		password: $password.val().trim()
	};

	if (!(user.name && user.email && user.password)) {
		alert('You must complete all fields!');
		return;
	} else {
		console.log(user);
		createUser(user);
	}
	$username.val('');
	$email.val('');
	$password.val('');
	//then redirect to create character page??//
	// window.location.href='XXXX.html';
};

function createUser(user) {
	$.post('/api/user', user, function () {
		console.log('User ADDED!');
	});
}

function handleLogin(event){
	var $loginName = $('#loginName');
	var $loginpsw = $('#loginpsw');
	var user = {
		name: $loginName.val().trim(),
		password: $loginpsw.val().trim()
	}
	event.preventDefault();
	confirmUser(user);
}

function confirmUser(user){
	$.get('/api/user',user, function(){
		console.log('Login Successful');
	});
}






