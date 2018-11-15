module.exports = function (sequelize, DataTypes) {
	var Character = sequelize.define('Character', {
		characterName: DataTypes.STRING,
		lifePoints: DataTypes.INTEGER,
		attackPoints: DataTypes.INTEGER,
		startLevel: DataTypes.INTEGER,
	});
	Character.associate = function (models) {
		Character.belongsTo(models.User);
	};
	return Character;
};