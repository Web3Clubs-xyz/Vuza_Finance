// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'devuser',
  host: 'localhost',
  database: 'eza_development',
  password: 'devuser',
  port: 5432,
});

module.exports = pool;
