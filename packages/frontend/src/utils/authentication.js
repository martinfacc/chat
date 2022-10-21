import ENV from '../config/env'
const { STORAGE_AUTHENTICATION_TOKEN_KEY } = ENV

export const getAuthToken = () => {
	return localStorage.getItem(STORAGE_AUTHENTICATION_TOKEN_KEY)
}

export const setAuthToken = (token) => {
	localStorage.setItem(STORAGE_AUTHENTICATION_TOKEN_KEY, token)
}

export const removeAuthToken = () => {
	localStorage.removeItem(STORAGE_AUTHENTICATION_TOKEN_KEY)
}
