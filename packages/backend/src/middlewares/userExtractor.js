import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import { User } from '../models/index.js'

const { JWT_SECRET } = process.env

const userExtractor = async (request, response, next) => {
	try {
		const authorization = request.get('authorization')
		if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
			const decodedToken = jwt.verify(authorization.substring(7), JWT_SECRET)
			const user = await User.findByPk(decodedToken.id)
			request.user = user
		}
	} catch {
		request.user = null
	} finally {
		next()
	}
}

export default userExtractor
