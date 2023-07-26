const { Pool, Client } = require('pg')
//Конфиг базы
const pool = () => new Pool({
     
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
    
});

module.exports = { pool };