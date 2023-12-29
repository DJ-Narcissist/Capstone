const jwt = require('jsonwebtoken');

// Check for JWT_SECRET at startup
if (!process.env.JWT_SECRET) {
    throw new Error('Fatal Error: JWT_SECRET is not defined.');
}

function generateToken(user) {
    // Ensure the user object contains only necessary information
    const payload = {
        id: user.id, // For example, include only the user's id
        // Add other necessary user attributes but avoid sensitive ones
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.error('Error verifying token:', error);
        // Customize error handling if needed
        return null; // Return null to indicate verification failure
    }
}

module.exports = { generateToken, verifyToken };
