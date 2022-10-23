import React, { useRef, useEffect } from 'react'
import propTypes from 'prop-types'
import useCaptcha from '@/hooks/useCaptcha.jsx'
import { Captcha } from './styles.jsx'

const CaptchaComponent = (props) => {
	const {
		backgroundColor,
		fontColor,
		fontSize,
		fontFamily,
		fontStyle,
		captchaLength,
	} = props

	const { captchaValue, reloadCaptcha } = useCaptcha()
	const canvasRef = useRef(null)

	const drawCaptcha = () => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		const lineHeight = 30

		const lines = captchaValue.split('\n')
		ctx.canvas.width = captchaLength * 25
		ctx.canvas.height = lines.length * lineHeight

		ctx.fillStyle = backgroundColor
		ctx.fillRect(0, 0, canvas.width, canvas.height)

		ctx.textBaseline = 'middle'
		ctx.font = `${fontStyle} ${fontSize} ${fontFamily}`
		ctx.fillStyle = fontColor

		for (let i = 0; i < captchaLength; i++) {
			const heigthNum = 20 * (i + 1)
			ctx.fillText(
				captchaValue[i],
				heigthNum,
				Math.round(Math.random() * (15 - 12) + 12)
			)
		}
	}

	useEffect(() => {
		reloadCaptcha(captchaLength)
	}, [])

	useEffect(() => {
		if (captchaValue) drawCaptcha()
	}, [captchaValue])

	return (
		<Captcha>
			<canvas ref={canvasRef} />
		</Captcha>
	)
}

CaptchaComponent.propTypes = {
	backgroundColor: propTypes.string,
	fontColor: propTypes.string,
	fontSize: propTypes.string,
	fontFamily: propTypes.string,
	fontStyle: propTypes.string,
	captchaLength: propTypes.number,
}

CaptchaComponent.defaultProps = {
	backgroundColor: '#fff',
	fontColor: '#000',
	fontSize: '25px',
	fontFamily: 'Comic Sans MS',
	fontStyle: 'italic',
	captchaLength: 6,
}

export default CaptchaComponent
