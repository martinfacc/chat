import React from 'react'
import classNames from 'classnames'
import { ForgotPassword, Form, CaptchaContainer, Anchor } from './styles'
import Captcha from '@/components/Captcha'
import { CaptchaContextProvider } from '@/contexts/captchaContext'
import { Row, Field, Input, InputWithSvgButton, SpanError } from '@/styles/Form'
import { ButtonPrimary } from '@/styles/Button'
import useCaptcha from '@/hooks/useCaptcha'
import { ajv, schema } from './schema.js'

const Refresh = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
	</svg>
)

const ForgotPasswordPage = () => {
	const [errors, setErrors] = React.useState({})

	const { reloadCaptcha, validateCaptcha, ticket } = useCaptcha()

	const handleSubmit = (event) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData)

		const validate = ajv.compile(schema)
		validate(data)

		const currentErrors = {}
		validate.errors?.forEach((error) => {
			const { message, instancePath } = error
			currentErrors[instancePath.slice(1)] = message
		})

		const captchaIsValid = validateCaptcha(data.captcha, ticket)

		if (!captchaIsValid) currentErrors.captcha = 'Captcha is incorrect'

		setErrors(currentErrors)
	}

	const className = (name) => classNames({ error: errors[name] })

	return (
		<ForgotPassword>
			<Form onSubmit={handleSubmit}>
				<Row width="400px">
					<h1>Forgot Password</h1>
					<Field>
						<label>
							<span>Email</span>
							<Input type="email" name="email" className={className('email')} />
							<SpanError>{errors.email || ''}</SpanError>
						</label>
					</Field>
					<Field>
						<label>
							<span>Captcha</span>
							<InputWithSvgButton>
								<Input
									type="text"
									name="captcha"
									maxLength="6"
									className={className('captcha')}
								/>
								<ButtonPrimary
									type="button"
									onClick={() => reloadCaptcha(6, ticket)}
								>
									<Refresh />
								</ButtonPrimary>
							</InputWithSvgButton>
							<SpanError>{errors.captcha || ''}</SpanError>
						</label>
					</Field>
					<CaptchaContainer>
						<Captcha />
					</CaptchaContainer>

					<ButtonPrimary type="submit">Enviar</ButtonPrimary>
					<Anchor to="/auth/login">Back to login</Anchor>
				</Row>
			</Form>
		</ForgotPassword>
	)
}

export default function ComponentPage() {
	return (
		<CaptchaContextProvider>
			<ForgotPasswordPage />
		</CaptchaContextProvider>
	)
}
