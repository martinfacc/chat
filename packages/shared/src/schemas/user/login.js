import ajv from '../index.js'

export const loginSchema = {
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

const validate = ajv.compile(loginSchema)

export default validate
