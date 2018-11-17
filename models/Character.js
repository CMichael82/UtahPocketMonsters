module.exports = function (sequelize, DataTypes) {
	var Character = sequelize.define('Character', {
		characterName: DataTypes.STRING,
		lifePoints: DataTypes.INTEGER,
		attackPoints: DataTypes.INTEGER,
		accuracy: DataTypes.INTEGER, 
		defense: DataTypes.INTEGER,
		startLevel: DataTypes.INTEGER,
		imageUrl: DataTypes.STRING
	});
	return Character;
};