module.exports = (srv) => {
    srv.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;
        let connection = srv.config.db();
        let noticiasModel = new srv.app.models['noticias.model'](connection);

        noticiasModel.salvarNoticia(noticia, (error, result) => {
            res.redirect('/noticias');
        });
    });
}