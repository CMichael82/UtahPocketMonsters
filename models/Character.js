module.exports = function (sequelize, DataTypes) {
	var Character = sequelize.define('Character', {
		character_name: DataTypes.STRING,
		life_points: DataTypes.INTEGER,
		attack_points: DataTypes.INTEGER,
		start_level: DataTypes.INTEGER,
	});
	return Character;
};