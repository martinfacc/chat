import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import colors from 'colors'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { PubSub } from 'graphql-subscriptions'
import makeSchema from './graphql/index.js'
// import sessionExtractor from './middlewares/sessionExtractor.js'
import userExtractor from './middlewares/userExtractor.js'
import { sequelize } from './database.js'
// import appRouter from './routes/index.js'
import { app, server } from './app.js'
// import errorHandler from './middlewares/errorHandler.js'
// import notFound from './middlewares/notFound.js'
import models from './models/index.js'

// import { ApolloServer } from 'apollo-server'

const { APP_PORT } = process.env

const pubsub = new PubSub()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use('/', appRouter)

// app.use(sessionExtractor)
app.use(userExtractor)

makeSchema().then(({ schema }) => {
	app.use(
		'/graphql',
		graphqlHTTP((request) => {
			const user = request.user
			return {
				graphiql: true,
				schema,
				context: {
					models,
					pubsub,
					user,
				},
			}
		})
	)

	// app.use(notFound)
	// app.use(errorHandler)

	server.listen(APP_PORT, async () => {
		console.log(colors.green('Server ready on port ' + APP_PORT))
		await sequelize.authenticate()
		console.log(colors.green('Database connected'))
		await sequelize.sync()
		console.log(colors.green('Database synchronized'))
	})

	// const server = new ApolloServer({
	// 	typeDefs,
	// 	resolvers,
	// 	context: ({ request }) => ({
	// 		authorization: request.headers.authorization,
	// 		// pubsub,
	// 		models,

	// 		graphiql: true,
	// 	}),
	// })

	// server.listen({ port: APP_PORT }).then(async ({ url }) => {
	// 	console.log(colors.green(`Server ready at ${url}`))
	// 	await sequelize.authenticate()
	// 	console.log(colors.green('Database connected'))
	// 	await sequelize.sync()
	// 	console.log(colors.green('Database synchronized'))
	// })
})
