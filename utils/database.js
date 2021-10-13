const { Pool } = require('pg');
const isProduction = process.env.NODE_ENV === 'production';

let pool;

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_38',
    password: '0000',
    port: '5432',
  })
}
// pool.query('SELECT * from category_38', (err, res) => {
//   console.log(JSON.stringify(res.rows));
//   pool.end();
// })

module.exports = pool;

// postgres://vguigymvjafyxz:97c5dffa465a025b6fe799c8fd4b2947f0bf4922b9c2df200acedd37847183de@ec2-52-87-123-108.compute-1.amazonaws.com:5432/d84crihvafi56g