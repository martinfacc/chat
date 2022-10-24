import React from 'react'
import ToastContext from '@/contexts/toastContext.jsx'

const useToast = () => {
	const { toasts, setToasts } = React.useContext(ToastContext)

	const addToast = ({ type = 'info', message = '', duration = 3000 }) => {
		const toast = { id: Date.now(), type, message, duration }
		setToasts((prev) => [...prev, toast])
	}

	const removeToast = (id) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id))
	}

	const addSuccessToast = (message = '', duration = 3000) => {
		addToast({ type: 'success', message, duration })
	}

	const addErrorToast = (message = '', duration = 3000) => {
		addToast({ type: 'error', message, duration })
	}

	return { toasts, addToast, removeToast, addSuccessToast, addErrorToast }
}

export default useToast
