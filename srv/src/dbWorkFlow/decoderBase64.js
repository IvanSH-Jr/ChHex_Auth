const decoder = (base64Key) => {
    const utf8 = Buffer.from(base64Key, 'base64').toString('utf8');
    const splited = utf8.split('!');
    const userEmail = splited[splited.length - 1];
    const userName = [];
    let index = 0;
    while (index < splited.length - 1) {
        userName.push(splited[index]);
        index += 1;
    };

    return { user: userName.join(' '), email: userEmail };
};

export default decoder;