const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "Nisal123@",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: "todoapp",
});

module.exports = pool;
