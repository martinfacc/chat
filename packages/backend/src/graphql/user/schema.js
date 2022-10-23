import Ajv from 'ajv'
import ajvErrors from 'ajv-errors'

const ajv = new Ajv({ allErrors: true, $data: true, messages: true })
ajvErrors(ajv)

const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
ajv.addFormat('email-format', emailRegex)

const registerSchema = {
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

const loginSchema = {
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
	required: ['username', 'password'],
}

export { ajv, registerSchema, loginSchema }
