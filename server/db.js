/**Database for the website */

require('dotenv').config();
/**
 * Database connection function
 * @param {object} dbConfig - database configuration object
 * @param {string} dbConfig.user - database username
 * @param {string} dbConfig.password - database password
 * @param {string} dbConfig.host - database host
 * @param {number} dbConfig.port - database port
 * @param {string} dbConfig.database - database name
 * @returns {void}
 */
const pg = require("pg");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

const db = new pg.Client(dbConfig);

/**
 * Connect to the database
 * @param {function} cb - callback function
 * @returns {void}
 */
db.connect(err => {
  if (err) {
  /**
     * Log an error if the connection fails
     * @param {Error} err - error object
     * @returns {void}
     */
    console.error('connection error', err.stack);
  } else {
    /**
     * Log a message if the connection is successful
     * @returns {void}
     */
    console.log('Connected to database');
  }
});

module.exports = db;
