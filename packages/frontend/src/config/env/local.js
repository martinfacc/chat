//ENV_MODE options: local, dev, test, prod
const ENV = {
	BACK_URL: 'http://localhost:3060',
	BACK_WS_URL: 'ws://localhost:3060',
}

Object.freeze(ENV)

export default ENV
