module.exports = (srv) => {
    let controller = new srv.app.controllers['noticias.controller'](srv);

    srv.get('/noticia/:id', (req, res) => {
        controller.noticia(req, res);
    });

    srv.get('/noticias', (req, res) => {
        controller.noticias(res);
    });
}