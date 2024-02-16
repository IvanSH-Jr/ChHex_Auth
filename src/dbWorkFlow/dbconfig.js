import { Sequelize, DataTypes } from 'sequelize';

//Конфиг базы
const sequelize = new Sequelize('ChHex_DB', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,

});

const User_Session = sequelize.define( 'User_Session', 
  {
      user: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      start: {
          type: DataTypes.STRING,
          allowNull: false,  
      },
      finish: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  },
  {
      sequelize,
      modelName: 'User_Session',
      timestamps: false,
  }
);

export { sequelize, User_Session };