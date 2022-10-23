import { makeExecutableSchema } from '@graphql-tools/schema'
import fs from 'fs'
import path from 'path'

const __dirname = path.resolve('src/graphql')

const folders = fs
	.readdirSync(__dirname)
	.filter((file) => fs.statSync(path.join(__dirname, file)).isDirectory())

const getTypeDefs = () => {
	const typeDefs = folders
		.map((folder) => {
			const schemaPath = path.join(__dirname, folder, 'schema.graphql')
			return fs.existsSync(schemaPath)
				? fs.readFileSync(schemaPath, 'utf8')
				: ''
		})
		.join('')
	return typeDefs
}

const getResolvers = async () => {
	const resolvers = {
		Query: {},
		Mutation: {},
	}
	const arrayOfResolvers = await Promise.all(
		folders.map(async (folder) => {
			const resolverPath = path.join(__dirname, folder, 'resolvers.js')
			if (fs.existsSync(resolverPath)) {
				const { default: def } = await import('./' + folder + '/resolvers.js')
				return def
			}
		})
	)
	arrayOfResolvers.forEach((resolver) => {
		resolvers.Query = { ...resolvers.Query, ...resolver.Query }
		resolvers.Mutation = { ...resolvers.Mutation, ...resolver.Mutation }
		// resolvers.Subscription = {
		// 	...resolvers.Subscription,
		// 	...resolver.Subscription,
		// }

		delete resolver.Query
		delete resolver.Mutation
		delete resolver.Subscription
		Object.keys(resolver).forEach((key) => (resolvers[key] = resolver[key]))
	})
	return resolvers
}

const makeSchema = async () => {
	const typeDefs = getTypeDefs()
	const resolvers = await getResolvers()

	const schema = makeExecutableSchema({
		typeDefs,
		resolvers,
	})
	return { schema, resolvers, typeDefs }
}

export default makeSchema
