require('dotenv').config();
var express = require('express');
var exphbs = require('express-handlebars');
var session = require('express-session');
var bodyParser = require('body-parser');
var keys = require('./config/keys');
// var path = require('path');

var db = require('./models');

var app = express();
var PORT = process.env.PORT || 3000;

//session cookies - setup
var expSession = {
	secret: keys.cookies.secret,
	cookie: {}
};

// Middleware
// app.use(express.urlencoded({
// 	extended: false
// }));
// app.use(express.json());

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
//Session Cookies//
app.use(session(expSession));
// Handlebars
app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main'
	})
);
app.set('view engine', 'handlebars');

// Routes
require('./services/passport.js')(app);
require('./routes/auth-routes')(app);
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

var syncOptions = {
	force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
	syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
	app.listen(PORT, function () {
		console.log(
			'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
			PORT,
			PORT
		);
	});
});

module.exports = app;