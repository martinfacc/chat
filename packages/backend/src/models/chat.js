import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../database.js'

class Chat extends Model {}
Chat.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
	},
	{
		sequelize,
		modelName: 'Chat',
	}
)

export default Chat
