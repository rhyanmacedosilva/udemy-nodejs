module.exports = (srv) => {
    srv.post('/noticias/salvar', (req, res) => {
        let noticia = req.body;
        // res.send(noticias);

        let connection = srv.config.db();
        let noticiasModel = srv.app.models['noticias.model'];

        noticiasModel.salvarNoticia(noticia, connection, (error, result) => {
            res.redirect('/noticias');
        });
    });
}