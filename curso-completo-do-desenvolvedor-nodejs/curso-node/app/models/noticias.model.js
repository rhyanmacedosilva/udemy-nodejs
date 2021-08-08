function NoticiasModel(connection) {
    this._connection = connection;
}

NoticiasModel.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias', callback);
}

NoticiasModel.prototype.getNoticia = function (id, callback) {
    this._connection.query('SELECT * FROM noticias WHERE id = ' + id, callback);
}

NoticiasModel.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

module.exports = () => {
    return NoticiasModel;
}