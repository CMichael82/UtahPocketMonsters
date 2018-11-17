module.exports = function (sequelize, DataTypes) {
	var Monster = sequelize.define('Monster', {
		monsterName: DataTypes.STRING,
		lifePoints: DataTypes.INTEGER,
		attackPoints: DataTypes.INTEGER,
		accuracy: DataTypes.INTEGER,
		defense: DataTypes.INTEGER,
		imageUrl: DataTypes.STRING,
	});
	return Monster;
};