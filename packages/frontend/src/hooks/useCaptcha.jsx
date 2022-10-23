import React from 'react'
import CaptchaContext from '@/contexts/captchaContext.jsx'
import { integerGenerator } from '@/utils/tickets.js'

let ticket = null

const useCaptcha = () => {
	const { captchaValue, setCaptchaValue } = React.useContext(CaptchaContext)

	const reloadCaptcha = (captchaLength = 6) => {
		ticket = integerGenerator()
		const CHARSET =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
		let newCaptchaValue = ''
		for (let i = 0; i < captchaLength; ++i) {
			newCaptchaValue += CHARSET.charAt(
				Math.floor(Math.random() * CHARSET.length)
			)
		}
		setCaptchaValue(newCaptchaValue)
	}

	const validateCaptcha = React.useCallback(
		(value, currentTicket) => {
			const isValid = value === captchaValue
			const ticketValue = currentTicket?.next().value
			if (!isValid && ticketValue >= 2) {
				reloadCaptcha(6)
				return false
			}
			return isValid
		},
		[captchaValue]
	)

	React.useEffect(() => {
		ticket = integerGenerator()
	}, [])

	return { captchaValue, reloadCaptcha, validateCaptcha, ticket }
}

export default useCaptcha
