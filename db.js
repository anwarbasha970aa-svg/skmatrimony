const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "matrimony",
  password: "910016aA@",
  port: 5432,
});

module.exports = pool;