import Ajv from 'ajv'
import ajvErrors from 'ajv-errors'

const ajv = new Ajv({ allErrors: true, $data: true, messages: true })
ajvErrors(ajv)

const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
ajv.addFormat('email-format', emailRegex)

const schema = {
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

export { ajv, schema }
