import pg from 'pg';
const {Pool} = pg;

//Конфиг базы
const config = {
  host: 'localhost',
  user:'postgres',
  database: 'ChHex_DB',
  password:'postgres',
  port:5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000, 
}
const postgres = new Pool(config)

export default postgres;