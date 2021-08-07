let dbConnection = require('../../config/db-connection');

module.exports = (app) => {
    let connection = dbConnection();

    app.get('/noticias', (req, res) => {
        connection.query('SELECT * FROM noticias', (error, result) => {
            // res.send(result);
            res.render('noticias/noticias', { noticias: result });
        });
    });
}