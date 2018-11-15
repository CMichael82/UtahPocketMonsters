module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		googleId: DataTypes.STRING,
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		characterId: DataTypes.INTEGER,
		password: DataTypes.STRING,
	});
	User.associate = function (models) {
		User.hasOne(models.Character, {
			onDelete: 'cascade'
		});
	};
	return User;
};