require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
app.use(express.json())
//DB
//connectDB  = require('./db/connect')

const routerMain = require('./routes/main')

//middleware
const errorHandlerMiddleWare = require('./middleware/error-handler')
const notFoundMiddleWare = require('./middleware/not-found')



//routes
app.get('/', (req, res) => {
	res.status(200).send("<h1>Working Fine</h1>")
})
app.use('/api/v1', routerMain)


app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)


const port = process.env.PORT
const start =  () => {
	app.listen(port, () => {
		console.log(`Server is listening on port ${port}`)
	})
}

start()