import decoder from './decoderBase64.js';
import postgres from './dbconfig.js';

const dataHandler = (data) => {
    console.log(data.body);
    const decodedData = decoder(data.body.Registration);
    console.log(decodedData)
}

const selectAll = async () =>  {
    const selectString = `
    SELECT * FROM uniqueusers
    `;
    return new Promise((resolve, reject) => {
        pool.query(selectString, async(error, res) => {
            console.log(res.rows)
            resolve(res.rows)
        })
    })

};

const addToTable = async (chhexData) => {
    const chhexDataString = `
        INSERT INTO session
            (fio, email, start, finish, version-control)
        VALUES
            ('${chhexData.user}', '${chhexData.email}'), '${chhexData.Start}', '${chhexData.Finish}' '${chhexData.VersionControl}')
        RETURNING *
    `;
};

const isUniq = async (req = null, res) => {
    
    const chhexData = req.body;
    const userInfo = decoder(req.body.Registration);
    const selectString = `
        SELECT uniqueusers.role
        FROM uniqueusers
        WHERE fio = '${userInfo.user}'
        AND email = '${userInfo.email}'
    `;
    chhexData.user = userInfo.user;
    chhexData.email = userInfo.email;
    //Запись в БД при входе в ChHex
    await addToTable(chhexData);
    const isExist = new Promise ( (resolve, reject) => {
        postgres.query(selectString, async (err, res = null) => {
            //Пользователя нет в таблице уникальных пользователей, возвращаем false
            if(res === null) return resolve(false);
            //Пользователь есть, возвращаем его уровень доступа
            return resolve(res.rows[0]);
        });
    });
    isExist.then((userRole) => {
        if (userRole) res.send([userInfo.user, userRole.role]);
        if (userRole === false) res.send([userInfo.user, 'Guest']);
    });
};

export default dataHandler;