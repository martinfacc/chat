import React from 'react'
import propTypes from 'prop-types'
import Spinner from '@/components/Spinner'

const SpinnerContext = React.createContext({})

export const SpinnerContextProvider = (props) => {
	const { children } = props
	const [isOpen, setIsOpen] = React.useState(false)

	const values = React.useMemo(() => ({ isOpen, setIsOpen }), [isOpen])

	return (
		<SpinnerContext.Provider value={values}>
			{children}
			<Spinner isOpen={isOpen} />
		</SpinnerContext.Provider>
	)
}

SpinnerContextProvider.propTypes = {
	children: propTypes.node.isRequired,
}

export default SpinnerContext
