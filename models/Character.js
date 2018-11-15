module.exports = function (sequelize, DataTypes) {
	var Character = sequelize.define('Character', {
		characterName: DataTypes.STRING,
		lifePoints: DataTypes.INTEGER,
		attackPoints: DataTypes.INTEGER,
		startLevel: DataTypes.INTEGER,
		difficulty: DataTypes.INTEGER
	});
	return Character;
};