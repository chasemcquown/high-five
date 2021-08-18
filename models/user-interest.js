const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class UserInterest extends Model {}
UserInterest.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'User',
				key: 'id',
			},
		},
		interest_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Interests',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'UserInterest',
	}
);
module.exports = UserInterest;
