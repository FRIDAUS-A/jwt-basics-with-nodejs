require('dotenv').config()
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authenticationMiddleWare = async (req, res, next) => {
	const authHeader = req.headers.authorization
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw new UnauthenticatedError('No token provided...UNAUTHORIZED')
	}
	token = authHeader.split(' ')[1]
	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
		const { id, username } = decoded
		req.user ={id, username}
	} catch(err) {
		throw UnauthenticatedError('Token is InValid...UNAUTHORIZED')
	}
	next()
}


module.exports = authenticationMiddleWare