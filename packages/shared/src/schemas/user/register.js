import ajv from '../index.js'

export const registerSchema = {
	type: 'object',
	properties: {
		username: {
			type: 'string',
			minLength: 3,
			maxLength: 20,
			errorMessage: {
				minLength: 'Username must be at least 3 characters',
				maxLength: 'Username must be at most 20 characters',
			},
		},
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
		confirmPassword: {
			type: 'string',
			const: { $data: '1/password' },
			errorMessage: {
				const: 'Passwords do not match',
			},
		},
	},
	required: ['username', 'email', 'password', 'confirmPassword'],
}

const validate = ajv.compile(registerSchema)

export default validate
