const { render } = require("../../config/server");

module.exports = (srv, { check, validationResult }) => {
    srv.post(
        '/noticias/salvar',

        check('titulo').not().isEmpty().withMessage('O título não pode ser vazio!'),
        check('resumo').not().isEmpty().withMessage('O resumo não pode ser vazio!'),

        (req, res) => {
            let noticia = req.body;
            let erros = validationResult(req).errors;

            // res.send(noticia);
            // res.send(erros);
            // return;

            if (erros.length > 0) {
                res.render('admin/form_add_noticia', { erros: erros, noticia: noticia });
                return;
            }

            let connection = srv.config.db();
            let noticiasModel = new srv.app.models['noticias.model'](connection);

            noticiasModel.salvarNoticia(noticia, (error, result) => {
                res.redirect('/noticias');
            });
        }
    );
}