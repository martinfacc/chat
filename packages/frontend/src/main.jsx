import React from 'react'
import ReactDOM from 'react-dom/client'
// import {
// 	ApolloClient,
// 	ApolloProvider,
// 	createHttpLink,
// 	InMemoryCache,
// 	split,
// } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'
// import { WebSocketLink } from '@apollo/client/link/ws'
// import { getMainDefinition } from '@apollo/client/utilities'
import { UserContextProvider } from '@/contexts/userContext'
import { ChatContextProvider } from '@/contexts/chatContext'
import GlobalStyles from '@/styles/GlobalStyles'
import { getAuthToken } from '@/utils/authentication'
import App from './App'
import ENV from '@/config/env'

const { BACK_URL, BACK_WS_URL } = ENV

// const httpLink = createHttpLink({
// 	uri: BACK_URL + '/graphql',
// })

// const authLink = setContext((_, { headers }) => {
// 	const token = getAuthToken()
// 	return {
// 		headers: {
// 			...headers,
// 			authorization: token ? `Bearer ${token}` : '',
// 		},
// 	}
// })

// const wsLink = new WebSocketLink({
// 	uri: BACK_WS_URL + '/graphql',
// 	options: {
// 		reconnect: false, // TODO: true
// 	},
// })

// const splitLink = split(
// 	({ query }) => {
// 		const definition = getMainDefinition(query)
// 		return (
// 			definition.kind === 'OperationDefinition' &&
// 			definition.operation === 'subscription'
// 		)
// 	},
// 	wsLink,
// 	authLink.concat(httpLink)
// )

// const defaultOptions = {
// 	watchQuery: {
// 		fetchPolicy: 'no-cache',
// 		errorPolicy: 'ignore',
// 	},
// 	query: {
// 		fetchPolicy: 'no-cache',
// 		errorPolicy: 'all',
// 	},
// }

// const apoloClient = new ApolloClient({
// 	link: splitLink,
// 	cache: new InMemoryCache(),
// 	defaultOptions,
// })

ReactDOM.createRoot(document.getElementById('root')).render(
	// <ApolloProvider client={apoloClient}>
	<UserContextProvider>
		<React.StrictMode>
			<ChatContextProvider>
				<App />
				<GlobalStyles />
			</ChatContextProvider>
		</React.StrictMode>
	</UserContextProvider>
	// </ApolloProvider>
)
