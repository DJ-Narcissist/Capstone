const db = require('../db');
const winston = require('winston'); 

// Set up Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});

async function runQuery(query, params = []) {
    try {
        const result = await db.query(query, params);
        return result.rows;
    } catch (error) {
        // Log the error with winston
        logger.error('Error executing query: ' + error.message, { query, params });

        // Optionally, rethrow the error if you want calling code to handle it
        throw error;
    }
}

module.exports = { runQuery };
