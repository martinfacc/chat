import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../database.js'

class User extends Model {}
User.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unqiue: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: DataTypes.STRING,
		avatar: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'User',
	}
)

export default User
