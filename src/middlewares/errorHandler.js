function errorHandler(err, req, res, next)  {
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err)
    return res.status(message)
}

module.exports = errorHandler;