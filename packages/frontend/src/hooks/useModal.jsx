import React from 'react'
import propTypes from 'prop-types'

const useModal = (initialState) => {
	const [isOpen, setIsOpen] = React.useState(initialState)

	const open = () => setIsOpen(true)

	const close = () => setIsOpen(false)

	const toggle = () => setIsOpen((prev) => !prev)

	return { isOpen, open, close, toggle }
}

useModal.defaultProps = {
	initialState: false,
}

useModal.propTypes = {
	initialState: propTypes.bool,
}

export default useModal
