const { Pool } = require('pg');
const isProduction = NODE_ENV === "production";
const pool = new Pool({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'crown_38',
  // password: '0000',
  // port: '5432',
  connectionString = isProduction ? DATABASE_URL : `postgres://postgres:0000@localhost:5432/crown_38`
})
pool.query('SELECT * from category_38', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
})

module.exports = pool;

// postgres://vguigymvjafyxz:97c5dffa465a025b6fe799c8fd4b2947f0bf4922b9c2df200acedd37847183de@ec2-52-87-123-108.compute-1.amazonaws.com:5432/d84crihvafi56g