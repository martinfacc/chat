import React from 'react'
import propTypes from 'prop-types'
import ToastContainer from '@/components/Toast/Container'
import Toast from '@/components/Toast'
const ToastContext = React.createContext({})

export const ToastContextProvider = (props) => {
	const { children } = props
	const [toasts, setToasts] = React.useState([])

	const values = React.useMemo(() => ({ toasts, setToasts }), [toasts])

	return (
		<ToastContext.Provider value={values}>
			{children}
			<ToastContainer>
				{toasts.map((toast) => (
					<Toast
						key={toast.id}
						id={toast.id}
						type={toast.type}
						message={toast.message}
						duration={toast.duration}
					/>
				))}
			</ToastContainer>
		</ToastContext.Provider>
	)
}

ToastContextProvider.propTypes = {
	children: propTypes.node.isRequired,
}

export default ToastContext
