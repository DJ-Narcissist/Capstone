const errorHandler = (err, req, res, next) => {
    //Log the error, 
    console.log(err.stack);

    // Respond with error details
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
}


module.exports = errorHandler;