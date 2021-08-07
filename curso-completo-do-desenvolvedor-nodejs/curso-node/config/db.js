let mySQL = require('mysql');
let connMySQL = () => {
    return mySQL.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    return connMySQL;
}