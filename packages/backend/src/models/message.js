import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../database.js'

class Message extends Model {}
Message.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		text: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		timestamp: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		userId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
		chatId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Message',
	}
)

export default Message
