import decoder from './decoderBase64.js';
import { sequelize, User_Session } from './dbconfig.js';

import clr from 'cli-color';

const requestHandler = async (request, response) => {
  if (!request.body) response.send('Bad request!');
  try {
    await sequelize.authenticate();
    await User_Session.sync();
    console.log(clr.green('Connection has been established successfully.'));
    const { user, email } = decoder(request.body.Registration);
    const { Start: start = 'session_end', Finish: finish = 'session_start' } = request.body;
    const createSession = await User_Session.create({ user, email, start, finish });
    console.log(clr.green('Session auto-generated ID:', createSession.id));
    response.send('privet chhex');
    } catch (error) {
    console.error(clr.red('Unable to connect to the database:'), error);
    response.send(error)
  };
};

export default requestHandler;