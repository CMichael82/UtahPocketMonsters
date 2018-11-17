module.exports = function (sequelize, DataTypes) {
	var MonsterDefeated = sequelize.define('MonsterDefeated', {
		level: DataTypes.INTEGER,
		});
		MonsterDefeated.associate = function (models) {
			MonsterDefeated.belongsTo(models.User);
			MonsterDefeated.belongsTo(models.Monster);
		};
	return MonsterDefeated;
};