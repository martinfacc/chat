import { User } from '../../models/index.js'
import { removeEmptyArgs } from '../../utils/graphql.js'

export default {
	Query: {
		message: async (parent, args) => {
			const where = removeEmptyArgs(args)
			const user = await User.findOne({ where })
			return user
		},
		messages: async (parent, args) => {
			const where = removeEmptyArgs(args)
			const user = await User.findOne({ where })
			return user
		},
	},
}
