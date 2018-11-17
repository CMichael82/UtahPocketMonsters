module.exports = function (sequelize, DataTypes) {
	var Character = sequelize.define('Character', {
		characterName: DataTypes.STRING,
		lifePoints: DataTypes.INTEGER,
		attackPoints: DataTypes.INTEGER,
		accuracy: DataTypes.INTEGER, 
		dodging: DataTypes.INTEGER,
		startLevel: DataTypes.INTEGER,
		imageUrl: DataTypes.STRING
	});
	return Character;
};