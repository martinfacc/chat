import React from 'react'
import propTypes from 'prop-types'
import { ToastContainer } from './styles'

const ToastContainerComponent = ({ children }) => {
	return <ToastContainer>{children}</ToastContainer>
}

ToastContainerComponent.propTypes = {
	children: propTypes.node.isRequired,
}

export default ToastContainerComponent
