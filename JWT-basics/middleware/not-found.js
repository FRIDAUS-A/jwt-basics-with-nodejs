const notFoundMiddleware = (req, res) => res.status(404).json({message: "Route Does Not Exist"})


module.exports = notFoundMiddleware