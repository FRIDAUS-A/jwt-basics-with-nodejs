mongoose = require('mongoose')

const connectDB = () => {
	return mongoose.connect(url).then(() => console.log('CONNECTED TO DB...')).catch((err) => console.log(err))
}


module.exports = connectDB