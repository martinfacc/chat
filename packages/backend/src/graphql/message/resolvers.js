import { Message } from '../../models/index.js'
import { removeEmptyArgs } from '../../utils/graphql.js'
// import subscriptions from './subscriptions.js'

export default {
	Query: {
		message: async (parent, args) => {
			const where = removeEmptyArgs(args)
			const message = await Message.findOne({ where })
			return message
		},
		messages: async (parent, args) => {
			const where = removeEmptyArgs(args)
			const messages = await Message.findAll({ where })
			return messages
		},
	},
	Mutation: {
		// createMessage: async (parent, args, { pubsub }) => {
		// 	const message = await Message.create(args)
		// 	pubsub.publish(subscriptions.MESSAGE_CREATED, {
		// 		messageCreated: message,
		// 	})
		// 	return message
		// },
	},
	// Subscription: {
	// 	messageAdded: {
	// 		subscribe: (parent, args, { pubsub }) => {
	// 			return pubsub.asyncIterator('MESSAGE_ADDED')
	// 		},
	// 	},
	// },
}
