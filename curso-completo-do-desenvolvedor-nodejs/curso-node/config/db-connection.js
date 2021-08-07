let mySQL = require('mysql');

module.exports = () => {
    return mySQL.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}