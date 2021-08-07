// let dbConnection = require('../../config/db-connection');

module.exports = (srv) => {
    srv.get('/noticias', (req, res) => {
        let connection = srv.config.db();
        let noticiasModel = new srv.app.models['noticias.model'](connection);

        noticiasModel.getNoticias((error, result) => {
            res.render('noticias/noticias', { noticias: result });
        });
    });
}