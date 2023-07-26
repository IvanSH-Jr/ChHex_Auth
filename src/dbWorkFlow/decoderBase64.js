const decoder = (base64Key) => {
    const utf8 = Buffer.from(base64Key, 'base64').toString('utf8');
    const splited = utf8.split('!');
    let userName = [];
    let userEmail = splited[splited.length - 1];
    for (let i = 0; i < splited.length - 1; i += 1) {
        userName.push(splited[i])
    }
    const result = {};
    result.user = userName.join(' ');
    result.email = userEmail;

    return result;
};

export default decoder;