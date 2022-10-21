import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import propTypes from 'prop-types'

const ThemeProviderComponent = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

ThemeProviderComponent.propTypes = {
	children: propTypes.node.isRequired,
}

export default ThemeProviderComponent
