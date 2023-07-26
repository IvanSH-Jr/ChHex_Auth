const dbMethods = require('./dbMethods');

const clr = require('cli-color')
const express = require("express");
const cors = require('cors')
const history = require('connect-history-api-fallback')

const app = express();
app.use(history())
app.use(cors()) 
app.options('*', cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/chhex", dbMethods.isUniq);


const date = new Date;
console.log(clr.green('Сервер авторизации для программы ChHex'));
console.log(clr.blue(`Дата запуска сервера: ${clr.yellowBright(date)}`));
//prod
//app.listen(8080)

//dev
app.listen(3000);