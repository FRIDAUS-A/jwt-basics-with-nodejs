require('dotenv').config()
//const { createCustomError } = require("../errors/custom-error")
jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
	const { username,password } = req.body
	if (!username || !password) {
		throw BadRequestError("Provide Email and Password")
	}
	const id  = new Date().getTime()
	const token = jwt.sign({id, username}, process.env.SECRET_KEY, {expiresIn: '30d'})
	res.status(200).json({
		status: "success",
		message: "user created",
		token: token
	})
} 

const dashboard = async (req, res) => {
	console.log(req.user)

	/**
	const authHeader = req.headers.authorization
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw createCustomError('No token...unauthorized', 401)
	}
	token = authHeader.split(' ')[1]
	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
	} catch(err) {
		throw createCustomError('Token is Invalid...unauthorized', 401)
	}
	**/
	const luckyNumber = Math.floor(Math.random() * 100)
	res.status(200).json({
		msg: `Hello ${req.user.username}`, 
		secret: `Here is your Authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
	login,
	dashboard
}