function AdminController(srv, validationResult) {
    this._srv = srv;
    this._validationResult = validationResult;
}

AdminController.prototype.formularioInclusaoNoticia = function (res) {
    res.render('admin/form_add_noticia', { erros: null, noticia: {} });
}

AdminController.prototype.salvarNoticia = function (req, res) {
    let noticia = req.body;
    let erros = this._validationResult(req).errors;

    if (erros.length > 0) {
        res.render('admin/form_add_noticia', { erros: erros, noticia: noticia });
        return;
    }

    let connection = this._srv.config.db();
    let noticiasModel = new this._srv.app.models['noticias.model'](connection);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
        res.redirect('/noticias');
    });
}

module.exports = () => {
    return AdminController;
}