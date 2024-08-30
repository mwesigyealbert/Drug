const { Pool } = require('pg');

const pool = new Pool({
  user: 'albert',
  host: 'pharma.clo0846uqvjw.eu-north-1.rds.amazonaws.com',  // e.g., 'mydatabase.us-east-1.rds.amazonaws.com'
  database: 'pharma',
  password: '#$%Albert5.',
  port: 5432,  // Default PostgreSQL port
});

module.exports = pool;




