module.exports = (srv) => {
    srv.get('/formulario-inclusao-noticia', (req, res) => {
        res.render('admin/form_add_noticia', { erros: null, noticia: {} });
    });
}