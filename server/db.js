/**Database for the website */

require('dotenv').config();
const pg = require("pg");

const dbConfig = {
  user: process.env.DJNarcissist,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

const db = new pg.Client(dbConfig);

db.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('Connected to database');
  }
});

module.exports = db;
