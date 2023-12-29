const jwt = require('jsonwebtoken');
/**
 * Middleware to check if the user is an admin.
 * Expects a JWT token in the authorization header.
 * If verification is successful it calls next() to pass control to next handler
 * If not gives a 403 Forbidden response
 * 
 * @param {Object} req - The Express request object, containing the JWT token in the authentication header 
 * @param {Object} res -Response object to send back a response to next client
 * @param {Function} next - The callback function to pass control to the next middleware 
 * @returns 
 */
function isAdmin(req, res, next) {
    const token = req.headers.authorization; 

    if (!token) {
        return res.status(403).send('Access Denied: No token provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.isAdmin) {  
            next();
        } else {
            res.status(403).send('Access Denied');
        }
    } catch (err) {
        res.status(403).send('Invalid token');
    }
}

/**
 * Middleware to check if a user is authenticated.
 * Expects a JWT Token in the authorization header. Verfies the token and if valid 
 * adds the decoded user info to the request object.
 * Calls next() to pass control to next middleware if token is validated
 * Sends 401 response if token is missing or invalid.
 * 
 * @param {Object} req - Request object, containing JWT token in the authorization header
 * @param {Object} res - Response object used to send back responses to the client
 * @param {Function} next - Callback function to pass controll to next middleware
 * @returns 
 */
const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if(!token) {
        return res.status(401).send('Access Denied: No token provided');
    }

    try  {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send('Invalid')
    }
};


module.exports = { isAdmin, isAuthenticated };