const Pool = require('pg').Pool;
require('dotenv').config()
const pool = new Pool({
  user: process.env.DB_NAME,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
})


module.export = pool;