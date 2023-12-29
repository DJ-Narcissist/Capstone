/** Middleware for handling errors
 * Logs the error stack  for debugging and sends a JSON response with the error details
 * 
 * @param {Error} err - Error boject thrown
 * @param {Object} req - Request object
 * @param {Object} res - Response object 
 * @param {Function} next - Next middleware function
 */

const errorHandler = (err, req, res, next) => {
    //Log the error, 
    console.log('Error caught in errorHandler:', err.stack);

    // Determine the status code
    const statusCode = err.statusCode || 500;

    // Determine the status code
    error: statusCode === 500 ? 'Internal Server': 'Error',
    
    // Respond with error details in development
    res.status(statusCode).json({
        message:process.env.NODE_ENV  === 'production' ? 'An error occured' : err.message
    });
}


module.exports = errorHandler;