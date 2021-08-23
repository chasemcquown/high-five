const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Interest extends Model {}
Interest.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		Interest_Category: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [3],
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'Interests',
	}
);
module.exports = Interest;
