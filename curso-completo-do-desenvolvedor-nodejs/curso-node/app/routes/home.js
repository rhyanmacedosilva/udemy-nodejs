module.exports = (srv) => {
    let controller = new srv.app.controllers['home.controller']();

    srv.get('/', (req, res) => {
        controller.index(res);
    });
}