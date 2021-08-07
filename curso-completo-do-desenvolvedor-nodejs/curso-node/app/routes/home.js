module.exports = (srv) => {
    srv.get('/', (req, res) => {
        res.render('home/index');
    });
}