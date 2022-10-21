import React from 'react'
import propTypes from 'prop-types'
import { getAuthToken, removeAuthToken } from '@/utils/authentication'
import { getStorageUser, removeStorageUser } from '@/utils/user'
const UserContext = React.createContext({})

export const UserContextProvider = (props) => {
	const { children } = props
	const [user, setUser] = React.useState(null)

	React.useEffect(() => {
		const token = getAuthToken()
		const storageUser = getStorageUser()
		if (token && storageUser) {
			setUser({
				...storageUser,
				token,
			})
		} else {
			removeAuthToken()
			removeStorageUser()
		}
	}, [])

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}

UserContextProvider.propTypes = {
	children: propTypes.node.isRequired,
}

export default UserContext
