function NoticiasController(srv) {
    this._srv = srv;
}

NoticiasController.prototype.noticias = function (res) {
    let connection = this._srv.config.db();
    let noticiasModel = new this._srv.app.models['noticias.model'](connection);

    noticiasModel.getNoticias((error, result) => {
        res.render('noticias/noticias', { noticias: result });
    });
}

NoticiasController.prototype.noticia = function (req, res) {
    let connection = this._srv.config.db();
    let noticiasModel = new this._srv.app.models['noticias.model'](connection);
    let idNoticia = req.params.id;

    noticiasModel.getNoticia(idNoticia, (error, result) => {
        res.render('noticias/noticia', { noticia: result[0] });
    });
}

module.exports = () => {
    return NoticiasController;
}