module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		googleId: DataTypes.STRING,
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		characterId: DataTypes.INTEGER,
		password: DataTypes.STRING,
	});
	return User;
};