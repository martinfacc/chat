import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import useModal from '@/hooks/useModal'
import useToast from '@/hooks/useToast'
import { Toast } from './styles'
import icons from './icons'

const ToastComponent = (props) => {
	const { id, type, message, duration } = props
	const { isOpen, close } = useModal(true)
	const { removeToast } = useToast()

	React.useEffect(() => {
		const timer = setTimeout(() => {
			close()
			removeToast(id)
		}, duration)
		return () => clearTimeout(timer)
	}, [duration])

	return (
		isOpen && (
			<Toast className={classNames(type)} duration={duration}>
				{icons[type]}
				<span>{message}</span>
				<button onClick={close}>&times;</button>
			</Toast>
		)
	)
}

ToastComponent.propTypes = {
	id: propTypes.number.isRequired,
	type: propTypes.oneOf(['success', 'error', 'info', 'warning']).isRequired,
	message: propTypes.string.isRequired,
	duration: propTypes.number,
}

export default ToastComponent
