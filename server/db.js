/**Database for the website */

const pg = require("pg");

const db = new pg.Client("postgresql://website");

db.connect();

module.exports = db;