// let dbConnection = require('../../config/db-connection');

module.exports = (srv) => {
    srv.get('/noticia', (req, res) => {
        let connection = srv.config.db();
        let noticiasModel = srv.app.models['noticias.model'];

        noticiasModel.getNoticia(connection, (error, result) => {
            // res.send(result);
            res.render('noticias/noticia', { noticia: result[0] });
        });
    });
}