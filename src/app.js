import requestHandler from './dbWorkFlow/dbMethods.js';

import clr from 'cli-color';
import cors from 'cors';
import history from 'connect-history-api-fallback';
import express from 'express';

const startServer = () => {
  const app = express();
  app.use(history())
  app.use(cors()) 
  app.options('*', cors())
  app.use(express.urlencoded({extended:true}));
  app.use(express.json());
  
  app.post("/chhex", requestHandler);
  
  const date = new Date;
  console.log(clr.green('Сервер авторизации для программы ChHex'));
  console.log(clr.blue(`Дата запуска сервера: ${clr.yellowBright(date)}`));
  
  //prod
  //app.listen(8080)
  
  //dev
  app.listen(3000);
};

export default startServer;
