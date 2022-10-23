import Ajv from 'ajv'
import ajvErrors from 'ajv-errors'

const ajv = new Ajv({ allErrors: true, $data: true, messages: true })
ajvErrors(ajv)

const schema = {
	type: 'object',
	properties: {
		password: {
			type: 'string',
			minLength: 8,
			maxLength: 20,
			errorMessage: {
				minLength: 'Password must be at least 8 characters',
				maxLength: 'Password must be at most 20 characters',
			},
		},
		confirmPassword: {
			type: 'string',
			const: { $data: '1/password' },
			errorMessage: {
				const: 'Passwords do not match',
			},
		},
		captcha: {
			type: 'string',
			minLength: 6,
			maxLength: 6,
			errorMessage: {
				minLength: 'Captcha must be 6 characters',
				maxLength: 'Captcha must be 6 characters',
			},
		},
	},
	required: ['password', 'confirmPassword', 'captcha'],
}

export { ajv, schema }
