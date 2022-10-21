import LOCAL_ENV from './local.js'
import PROD_ENV from './production.js'

//ENV_MODE: local, prod
const ENV_MODE = 'local'

const ENV = {
	ENV_MODE,
}

switch (ENV_MODE) {
	case 'local':
		Object.assign(ENV, LOCAL_ENV)
		break
	case 'prod':
		Object.assign(ENV, PROD_ENV)
		break
	default:
		Object.assign(ENV, LOCAL_ENV)
}

Object.freeze(ENV)

export default ENV
