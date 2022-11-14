require("dotenv").config();

const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.DB_NAME,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

module.exports = pool;
