import React from 'react'
import propTypes from 'prop-types'
import { Overlay, Spinner } from './styles.jsx'

const SpinnerComponent = (props) => {
	const { isOpen } = props
	return (
		<>
			{isOpen && (
				<Overlay>
					<Spinner />
				</Overlay>
			)}
		</>
	)
}

SpinnerComponent.propTypes = {
	isOpen: propTypes.bool.isRequired,
}

export default SpinnerComponent
