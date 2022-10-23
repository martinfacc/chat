import Ajv from 'ajv'
import ajvErrors from 'ajv-errors'

const ajv = new Ajv({ allErrors: true, $data: true, messages: true })
ajvErrors(ajv)

const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
ajv.addFormat('email-format', emailRegex)

export default ajv
