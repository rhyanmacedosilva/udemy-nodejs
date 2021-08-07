module.exports = (srv, { check, validationResult }) => {
    let controller = new srv.app.controllers['admin.controller'](srv, validationResult);

    srv.get('/formulario-inclusao-noticia', (req, res) => {
        controller.formularioInclusaoNoticia(res);
    });

    srv.post(
        '/noticias/salvar',

        check('titulo').not().isEmpty().withMessage('O título não pode ser vazio!'),
        check('resumo').not().isEmpty().withMessage('O resumo não pode ser vazio!'),

        (req, res) => {
            controller.salvarNoticia(req, res);
        }
    );
}