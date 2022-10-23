import dotenv from 'dotenv'
dotenv.config()
import { removeEmptyArgs } from '../../utils/graphql.js'
import { hashPassword, comparePassword } from '../../utils/password.js'
import { ajv, registerSchema, loginSchema } from './schema.js'
import { UserInputError } from 'apollo-server'
import jwt from 'jsonwebtoken'
import { Op } from 'sequelize'

const { JWT_SECRET } = process.env

export default {
	Query: {
		user: async (parent, args, context) => {
			const { User } = context.models
			const where = removeEmptyArgs(args)
			const user = await User.findOne({ where })
			return user
		},
		users: async (parent, args, context) => {
			const { User } = context.models
			const where = removeEmptyArgs(args)
			const user = await User.findOne({ where })
			return user
		},
		login: async (parent, args, context) => {
			const { User } = context.models
			const { username, password } = args

			const validate = ajv.compile(loginSchema)
			const valid = validate({ username, password })
			if (!valid)
				throw new UserInputError('Invalid input', { errors: validate.errors })

			const user = await User.findOne({ where: { username } })
			if (!user)
				throw new UserInputError('Invalid input', {
					username: 'User not found',
				})

			const passwordMatch = await comparePassword(password, user.password)
			if (!passwordMatch)
				throw new UserInputError('Invalid input', {
					password: 'Incorrect password',
				})

			const token = jwt.sign({ id: user.id }, JWT_SECRET, {
				expiresIn: '1d',
			})

			const userWithToken = { ...user.toJSON(), token }
			delete userWithToken.password

			return userWithToken
		},
		getOtherUsers: async (parent, args, context) => {
			const { User } = context.models
			const user = context.user
			if (!user) return []

			const users = await User.findAll({
				where: {
					id: {
						[Op.ne]: user.id,
					},
				},
			})
			return users
		},
	},
	Mutation: {
		register: async (parent, args, context) => {
			console.log({ context })

			const { User } = context.models
			const { username, email, password, confirmPassword } = args

			const validate = ajv.compile(registerSchema)
			const valid = validate(registerSchema, {
				username,
				email,
				password,
				confirmPassword,
			})

			if (!valid) throw new UserInputError('Invalid input', validate.errors)

			const findUserByUsername = await User.findOne({ where: { username } })
			if (findUserByUsername)
				throw new UserInputError('Invalid input', {
					username: 'Username is already taken',
				})

			const findUserByEmail = await User.findOne({ where: { email } })
			if (findUserByEmail)
				throw new UserInputError('Invalid input', {
					email: 'Email is already taken',
				})

			const hashedPassword = await hashPassword(password)

			const user = await User.create({
				username,
				email,
				password: hashedPassword,
			})
			return user
		},
	},
}
