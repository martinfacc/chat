import React, { useState } from 'react'
import propTypes from 'prop-types'

const CaptchaContext = React.createContext({})

export const CaptchaContextProvider = (props) => {
	const { children } = props
	const [captchaValue, setCaptchaValue] = useState(null)

	return (
		<CaptchaContext.Provider value={{ captchaValue, setCaptchaValue }}>
			{children}
		</CaptchaContext.Provider>
	)
}

CaptchaContextProvider.propTypes = {
	children: propTypes.node.isRequired,
}

export default CaptchaContext
