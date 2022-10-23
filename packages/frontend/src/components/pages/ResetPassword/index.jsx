import React from 'react'
import classNames from 'classnames'
import { ResetPassword, Form, CaptchaContainer } from './styles'
import { Row, Field, Input, InputWithSvgButton, SpanError } from '@/styles/Form'
import { ButtonPrimary } from '@/styles/Button'
import useModal from '@/hooks/useModal'
import useCaptcha from '@/hooks/useCaptcha'
import Captcha from '@/components/Captcha'
import { CaptchaContextProvider } from '@/contexts/captchaContext'
import { ajv, schema } from './schema.js'

const Eye = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
		<path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
	</svg>
)

const EyeSlash = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
		<path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z" />
	</svg>
)

const Refresh = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
	</svg>
)

const ResetPasswordPage = () => {
	const { isOpen: showPassword, toggle: togglePassword } = useModal()
	const { isOpen: showConfirmPassword, toggle: toggleConfirmPassword } =
		useModal()
	const { reloadCaptcha, validateCaptcha, ticket } = useCaptcha()
	const [errors, setErrors] = React.useState({})

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
		<ResetPassword>
			<Form onSubmit={handleSubmit}>
				<Row width="400px">
					<h1>Reset Password</h1>
					<Field>
						<label>
							<span>Password</span>
							<InputWithSvgButton>
								<Input
									type={showPassword ? 'text' : 'password'}
									name="password"
									className={className('password')}
								/>
								<ButtonPrimary type="button" onClick={togglePassword}>
									{showPassword ? <EyeSlash /> : <Eye />}
								</ButtonPrimary>
							</InputWithSvgButton>
							<SpanError>{errors.password || ''}</SpanError>
						</label>
					</Field>
					<Field>
						<label>
							<span>Confirm Password</span>
							<InputWithSvgButton>
								<Input
									type={showConfirmPassword ? 'text' : 'password'}
									name="confirmPassword"
									className={className('confirmPassword')}
								/>
								<ButtonPrimary type="button" onClick={toggleConfirmPassword}>
									{showConfirmPassword ? <EyeSlash /> : <Eye />}
								</ButtonPrimary>
							</InputWithSvgButton>
							<SpanError>{errors.confirmPassword || ''}</SpanError>
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
					<ButtonPrimary type="submit">Reset Password</ButtonPrimary>
				</Row>
			</Form>
		</ResetPassword>
	)
}

export default function ComponentPage() {
	return (
		<CaptchaContextProvider>
			<ResetPasswordPage />
		</CaptchaContextProvider>
	)
}
