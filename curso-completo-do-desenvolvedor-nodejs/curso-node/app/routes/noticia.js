module.exports = (srv) => {
    let controller = new srv.app.controllers['noticias.controller'](srv);

    srv.get('/noticia', (req, res) => {
        controller.noticia(res);
    });

    srv.get('/noticias', (req, res) => {
        controller.noticias(res);
    });
}