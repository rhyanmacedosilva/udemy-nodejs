function HomeController() { }

HomeController.prototype.index = function (res) {
    res.render('home/index');
}

module.exports = () => {
    return HomeController;
}