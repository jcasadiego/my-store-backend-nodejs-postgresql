const { Pool } = require('pg');


const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'jcasadiego',
  password: 'Casadiegom2421',
  database: 'my_store'
});

module.exports = pool;
