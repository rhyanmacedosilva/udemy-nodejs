// let dbConnection = require('../../config/db-connection');

module.exports = (srv) => {
    srv.get('/noticia', (req, res) => {
        let connection = srv.config.db();
        let noticiasModel = new srv.app.models['noticias.model'](connection);

        noticiasModel.getNoticia((error, result) => {
            res.render('noticias/noticia', { noticia: result[0] });
        });
    });
}