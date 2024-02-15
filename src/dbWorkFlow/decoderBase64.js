const decoder = (base64Key) => {
    const utf8 = Buffer.from(base64Key, 'base64').toString('utf8');
    console.log(utf8)
    const splited = utf8.split('!');
    const userName = [];
    const userEmail = splited[splited.length - 1];
    splited.forEach((item) => userName.push(item));
    return { user: userName.join(' '), email: userEmail };
};

export default decoder;