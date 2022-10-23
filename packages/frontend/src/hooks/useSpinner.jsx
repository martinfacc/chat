import React from 'react'
import SpinnerContext from '@/contexts/spinnerContext.jsx'

const useSpinner = () => {
	const { isOpen, setIsOpen } = React.useContext(SpinnerContext)

	const open = () => setIsOpen(true)

	const close = () => setIsOpen(false)

	const toggle = () => setIsOpen((prev) => !prev)

	return { isOpen, open, close, toggle }
}

export default useSpinner
