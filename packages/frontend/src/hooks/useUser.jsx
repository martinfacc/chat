import React from 'react'
import { useApolloClient } from '@apollo/client'
import UserContext from '@/contexts/userContext.jsx'
import { removeAuthToken, setAuthToken } from '@/utils/authentication'
import { removeStorageUser, setStorageUser } from '@/utils/user'

const useUser = () => {
	const { user, setUser } = React.useContext(UserContext)
	// const apolloClient = useApolloClient()

	const logout = () => {
		removeAuthToken()
		removeStorageUser()
		setUser(null)
		// apolloClient.resetStore()
	}

	const login = (data) => {
		const userForStorage = {
			...data.user,
			token: data.token,
		}
		setUser(userForStorage)
		setAuthToken(data.token)
		setStorageUser(JSON.stringify(user))
	}

	return { user, logout, login }
}

export default useUser
