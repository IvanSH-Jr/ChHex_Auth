const dbConfig = require('./dbconfig');
const decoderBase64 = require('./decoderBase64');

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
    const userInfo = decoderBase64.decoder(req.body.Registration);
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
        const pool = dbConfig.pool()
        pool.query(selectString, async (err, res = null) => {
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

module.exports = { addToTable, selectAll, isUniq };