import ajv from '../index.js'

export const loginSchema = {
	type: 'object',
	properties: {
		email: {
			type: 'string',
			format: 'email-format',
			errorMessage: {
				type: 'Email must be a string',
				format: 'Email must be a valid email address',
			},
		},
		password: {
			type: 'string',
			minLength: 8,
			maxLength: 20,
			errorMessage: {
				minLength: 'Password must be at least 8 characters',
				maxLength: 'Password must be at most 20 characters',
			},
		},
	},
	required: ['email', 'password'],
}

const validate = ajv.compile(loginSchema)

export default validate
