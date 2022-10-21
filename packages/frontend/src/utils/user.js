import ENV from '@/config/env'
const { STORAGE_USER_KEY } = ENV

export const getStorageUser = () => {
	const user = localStorage.getItem(STORAGE_USER_KEY)
	return user ? JSON.parse(user) : null
}

export const setStorageUser = (token) => {
	localStorage.setItem(STORAGE_USER_KEY, token)
}

export const removeStorageUser = () => {
	localStorage.removeItem(STORAGE_USER_KEY)
}
