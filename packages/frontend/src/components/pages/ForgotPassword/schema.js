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
	required: ['email', 'captcha'],
}

export { ajv, schema }
