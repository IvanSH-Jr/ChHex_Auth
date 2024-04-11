import requestHandler from './dbWorkFlow/dbMethods.js';

import clr from 'cli-color';
import cors from 'cors';
import history from 'connect-history-api-fallback';
import express from 'express';

const startServer = () => {
  const app = express();
  //app.use(history())
  //app.use(cors()) 
  //app.options('*', cors())
  //app.use(express.urlencoded({extended:true}));
  //app.use(express.json());
  
  app.get("/", (req, res) => {
    res.send('<h1>CHhex</h1>');
  });

  app.post("/chhex", requestHandler);
  
  const date = new Date;
  const srvPort = 5000;
  app.listen(srvPort, () => {
    console.log(clr.green('Сервер авторизации для программы ChHex'));
    console.log(clr.blue(`Дата запуска сервера: ${clr.yellowBright(date)}`));
  });

  process.on('SIGINT', () => listener.close());
  process.on('SIGTERM', () => listener.close());
};

export default startServer;
