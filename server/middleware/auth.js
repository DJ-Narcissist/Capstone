const jwt = require('jsonwebtoken');

function isAdmin(req, res, next) {
    const token = req.headers.authorization; // or wherever you store your token

    if (!token) {
        return res.status(403).send('Access Denied: No token provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.isAdmin) {  // Assuming your token encodes admin status
            next();
        } else {
            res.status(403).send('Access Denied');
        }
    } catch (err) {
        res.status(403).send('Invalid token');
    }
}

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