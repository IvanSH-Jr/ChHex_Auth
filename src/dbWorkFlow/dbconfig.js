import pg from 'pg';
const {Pool} = pg;

//Конфиг базы
const config = {
  host: 'localhost',
  user:'postgres',
  //user: 'aspzbase',
  database: 'userdb',
  password:'postgres',
  //password: 'test_password',
  port:5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000, 
}
const postgres = new Pool(config)

export default postgres;